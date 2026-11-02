import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import { get } from "@vercel/blob";
import { ACCESS_COOKIE, PROTECTED_PREFIX, hasAccess } from "@/lib/caseAccess";
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

// Components the private MDX may use. The MDX itself can't import anything.
const caseComponents = {
  AtAGlance,
  CaseStudyHeader,
  HowMightWe,
  LearnLog,
  MetricGrid,
  ProcessNav,
  Stage,
  ImpactGrid,
  PrincipleTable,
  DialogueExplorer,
  ResponseOptions,
  RubricFigure,
  ActMarker,
  BeforeAfterTabs,
  CaseFigure,
  CaseVideo,
  EvolutionFigure,
  TaxonomyFigure,
};

export async function ProtectedCaseStudy() {
  // Checked again here, next to the private read, in addition to the proxy.
  const jar = await cookies();
  if (!(await hasAccess(jar.get(ACCESS_COOKIE)?.value))) {
    redirect(`/unlock?next=${encodeURIComponent(PROTECTED_PREFIX)}`);
  }

  // Skip the CDN cache so edits to the text show up right away. The file is small.
  const result = await get("case-study.mdx", { access: "private", useCache: false });
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
