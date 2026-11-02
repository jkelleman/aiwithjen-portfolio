// Files for the protected Pipeline Copilot case study.
// They live at the top level of a private Vercel Blob store dedicated to this case study
// and are served only through /api/case-assets/<name> after the password check.
// Descriptions and alt text live with the private content, not in this public repo.

export type CaseAsset = { width: number; height: number };

export const CASE_ASSETS = {
  "investigate-demo.mp4": { width: 1920, height: 900 },
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
} satisfies Record<string, CaseAsset>;

export type CaseAssetName = keyof typeof CASE_ASSETS;

export const caseAssetUrl = (name: CaseAssetName) => `/api/case-assets/${name}`;
