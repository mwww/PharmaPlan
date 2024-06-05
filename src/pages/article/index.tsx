// function Home() {
//   return <h1>Hi!</h1>
// }

import setTitle from "../../helper/title/title";

// import Hero from "./hero/hero";

import css from './index.module.scss'

export default function Article() {
  setTitle("Article");

  return (
    <div className={css.cont}>
      <article>
        <div>
          <div>
            <h1>Tzield, new breakthrough medicine for Type-1 Diabetes</h1>
            <p>The Smelly Wibu Nerdy Writer, October 18, 2023</p>
          </div>
        </div>
        <div>
          <p>
          In November 2022, teplizumab-mzwv (TZIELD; Provention Bio, Inc., a Sanofi Company, Red Bank, NJ) became the first drug approved to change the progression of autoimmunity in type 1 diabetes (i.e., to delay the onset of stage 3 type 1 diabetes in adults and children age ≥8 years with stage 2 disease). The approval of teplizumab represents the first drug approval for the delay of any autoimmune disease in patients before clinical onset. Decades of studies preceded the approval of teplizumab, beginning with preclinical studies followed by six clinical trials, including five in patients after clinical diagnosis (stage 3) and one in patients before clinical diagnosis (stage 2) who had two or more pancreatic islet autoantibodies and dysglycemia. These studies were used as support in the U.S. Food and Drug Administration Biologics Licenses Application submission and design of the PROTECT (Phase 3 Trial Evaluating Teplizumab in Patients With Recent-Onset Type 1 Diabetes) study (clinical trial reg. no. NCT03875729, ClinicalTrials.gov).
          </p>
          <br />
          <p>
          Teplizumab is a humanized immunoglobulin G1 monoclonal antibody that binds with high affinity to the ε chain of CD3. Its complementarity-determining region is derived from ortho kung T3 (OKT3), the first monoclonal antibody licensed for human use for acute solid graft rejection. OKT3 was humanized to minimize immunogenicity. Two Leu→Ala substitutions in the Fc region were introduced to minimize Fc-receptor binding, resulting in 100- to 1,000-fold reduction in T-cell activation, T-cell proliferation, and cytokine release in human peripheral blood mononuclear cell cultures compared with OKT3 (1–5). Early studies of its mechanism showed that partial agonism led to effects on CD8+ T cells integral to autoimmune-mediated destruction of pancreatic β-cells (6–10).
          </p>
          <br />
          <p>
          Teplizumab was initially investigated for the treatment of acute transplant rejection and psoriatic arthritis (11–14). Simultaneously, experiments in spontaneous and chemically induced diabetic mouse models provided evidence for reversal or prevention of autoimmune diabetes and immune tolerance, and continuous administration, a requirement for previously studied immune therapies, was not required (15–17).
          </p>
          <br />
          <p>
          The first randomized clinical trial in stage 3 type 1 diabetes was a phase 2 clinical study (Study 1) that evaluated the safety, tolerability, and efficacy of teplizumab administered as a single 12- or 14-day course versus standard of care in patients with newly diagnosed stage 3 disease (18). Efficacy was evaluated based on preservation of β-cell function by assessing C-peptide responses to mixed-meal tolerance tests (MMTTs). The success of this trial led to a randomized phase 2 trial (AbATE [Autoimmunity-Blocking Antibody for Tolerance in Recently Diagnosed Type 1 Diabetes]; clinical trial reg. no. NCT00129259), in which a second course of teplizumab was administered after 1 year to prolong duration of response (18–20). Subsequently, two phase 3 trials (Protégé and Encore; clinical trial reg. nos. NCT00385697 and NCT00920582, respectively) tested three dosing regimens of teplizumab, administered over two courses 6 months apart. These trials used a novel and unvalidated composite primary end point of exogenous insulin use and HbA1c. In an interim analysis, the Protégé study did not meet its primary end point, which led to termination and discontinuation of further clinical development (21). At the time these two studies were terminated, another phase 2 trial (Delay; clinical trial reg. no. NCT00378508) evaluated the effect of teplizumab in patients recruited 4 to 12 months after type 1 diabetes diagnosis who had clinically significant levels of stimulated C-peptide (e.g., &gt;0.2 nmol/L) (22). All five clinical studies showed promising C-peptide preservation.
          </p>
          <br />
          <p>
          The stage 2 study, TN-10 (clinical trial reg. no. NCT01030861), was sponsored by the National Institute of Diabetes and Digestive and Kidney Diseases and conducted by Type 1 Diabetes TrialNet to evaluate whether a single course of teplizumab would delay or prevent clinical diagnosis of type 1 diabetes in patients with early-stage type 1 diabetes (stage 2) (23). The study enrolled relatives of patients with type 1 diabetes between ages 8 and 49 years who had two or more islet autoantibodies and dysglycemia. Results showed a statistically significant delay in median time to onset of stage 3 clinical type 1 diabetes of ∼2 years compared with patients receiving placebo, indicating stabilization of the decline in β-cells, leading to preservation of β-cell function, with an updated analysis reporting a delay in progression extending to 2.7 years (23,24).
          </p>
          <br />
          <p>
          Although results of the clinical studies support the preservation of β-cell function as evaluated by C-peptide, a measure of endogenous insulin production, individual studies have had different protocol designs, including heterogeneous eligibility criteria and natures of control groups, which may have affected the overall interpretation of results (25).
          </p>
          <br />
          <p>
          Therefore, the primary aim of this integrated analysis was to confirm the consistency of the effects of teplizumab on β-cell function as measured by stimulated C-peptide levels across the five clinical trials in patients with stage 3 clinical type 1 diabetes. A secondary efficacy analysis of exogenous insulin use was conducted. A comprehensive review of the safety experience with teplizumab in patients with stage 2 or 3 type 1 diabetes was also performed.
          </p>
        </div>
      </article>
    </div>
  )
}
