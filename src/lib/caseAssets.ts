// Files for the protected case studies.
// They live at the top level of the private Vercel Blob store
// and are served only through /api/case-assets/<name> after the password check.
// Descriptions and alt text live with the private content, not in this public repo.

export type CaseAsset = { width: number; height: number };

export const CASE_ASSETS = {
  "investigate-demo.mp4": { width: 1920, height: 900 },
  "investigate-demo.vtt": { width: 0, height: 0 },
  "investigate-demo-poster.png": {
    width: 1920,
    height: 900 },
  "before-after-workspace-permission.png": {
    width: 1920,
    height: 1080 },
  "before-after-onelake-access.png": {
    width: 1920,
    height: 1080 },
  "before-after-capacity-throttling.png": {
    width: 1920,
    height: 1080 },
  "error-envelope-field-model.png": {
    width: 1920,
    height: 1025 },
  "error-template-matrix.png": {
    width: 2462,
    height: 1454 },
  "recovery-user-flow.png": {
    width: 1920,
    height: 1025 },
  "error-anatomy-model.png": {
    width: 1920,
    height: 1015 },
  "error-framework-roadmap.png": {
    width: 1920,
    height: 1025 },
  "guardrail-specificity-ladder.png": {
    width: 1920,
    height: 1015 },
  "guardrail-technical-detail.png": {
    width: 1920,
    height: 1015 },
  // Osmos and semantic layer process artifacts.
  "osmos-task-pane-in-context.png": { width: 1024, height: 578 },
  "osmos-review-gate-a.png": { width: 1024, height: 578 },
  "osmos-review-gate-b.png": { width: 1024, height: 578 },
  "osmos-removed-intake-approval.png": { width: 1024, height: 578 },
  "osmos-task-card-states.png": { width: 371, height: 1024 },
  "osmos-feedback-tracker.png": { width: 1600, height: 621 },
  "sem-understanding-before-metadata.png": { width: 1024, height: 360 },
  "sem-user-questions.png": { width: 848, height: 194 },
  "sem-problem-framing.png": { width: 1024, height: 576 },
  "sem-empty-state-before.png": { width: 1024, height: 632 },
  "sem-empty-state-after.png": { width: 1024, height: 632 },
  "sem-publish-messages.png": { width: 1024, height: 248 },
  "sem-error-details.png": { width: 1024, height: 624 },
} satisfies Record<string, CaseAsset>;

export type CaseAssetName = keyof typeof CASE_ASSETS;

export const caseAssetUrl = (name: CaseAssetName) => `/api/case-assets/${name}`;
