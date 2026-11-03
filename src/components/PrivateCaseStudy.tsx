import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import { get } from "@vercel/blob";
import { ACCESS_COOKIE, hasAccess } from "@/lib/caseAccess";
import { useMDXComponents } from "@/mdx-components";
import {
  AtAGlance,
  CaseStudyHeader,
  HowMightWe,
  ImpactGrid,
  LearnLog,
  MetricGrid,
  PrincipleTable,
  ProcessNav,
  Stage,
} from "@/components/CaseStudy";
import { DialogueExplorer, ResponseOptions, RubricFigure } from "@/components/ConversationFigures";
import { ActMarker, BeforeAfterTabs, CaseFigure, CaseVideo } from "@/components/CaseMedia";
import { EvolutionFigure, TaxonomyFigure } from "@/components/ErrorModels";
import { DirectionsExplored, JourneyMap, PersonaCards, SideBySide } from "@/components/DesignProcess";
import {
  CopilotThumb,
  MetricCardAfter,
  MetricPickerBefore,
  OsmosChatBefore,
  OsmosTaskAfter,
} from "@/components/CaseMocks";
import { PipelineFigure } from "@/components/PipelineFigure";
import FabricAgentTaskCenter from "@/components/FabricAgentTaskCenter";
import { CompareBars, GrammarFigure, TierFigure } from "@/components/SemanticFigures";

// Components the private MDX may use. The MDX itself can't import anything.
const caseComponents = {
  AtAGlance,
  CaseStudyHeader,
  HowMightWe,
  ImpactGrid,
  LearnLog,
  MetricGrid,
  PrincipleTable,
  ProcessNav,
  Stage,
  DialogueExplorer,
  ResponseOptions,
  RubricFigure,
  ActMarker,
  BeforeAfterTabs,
  CaseFigure,
  CaseVideo,
  EvolutionFigure,
  TaxonomyFigure,
  DirectionsExplored,
  JourneyMap,
  PersonaCards,
  SideBySide,
  CopilotThumb,
  MetricCardAfter,
  MetricPickerBefore,
  OsmosChatBefore,
  OsmosTaskAfter,
  PipelineFigure,
  FabricAgentTaskCenter,
  CompareBars,
  GrammarFigure,
  TierFigure,
};

/**
 * Renders a case study whose text lives in the private Blob store.
 * Checks access again here, next to the private read, in addition to the proxy.
 */
export async function PrivateCaseStudy({ blob, path }: { blob: string; path: string }) {
  const jar = await cookies();
  if (!(await hasAccess(jar.get(ACCESS_COOKIE)?.value))) {
    redirect(`/unlock?next=${encodeURIComponent(path)}`);
  }

  // Skip the CDN cache so edits to the text show up right away. The files are small.
  const result = await get(blob, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200 || !result.stream) {
    return (
      <div className="pt-10">
        <p className="fig-label mb-4">Case study</p>
        <p className="text-graphite">The case study content hasn&rsquo;t been uploaded yet.</p>
      </div>
    );
  }

  const source = await new Response(result.stream).text();
  const { default: Content } = await evaluate(source, {
    ...runtime,
    useMDXComponents,
  });

  return <Content components={caseComponents} />;
}
