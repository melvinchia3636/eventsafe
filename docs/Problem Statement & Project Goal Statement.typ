// Problem Statement & Project Goal Statement
// CivicaGov Solutions Sdn Bhd — EventSafe custom checklist management tool

#set page(
  paper: "a4",
  margin: (top: 2.2cm, bottom: 2.2cm, x: 2.4cm),
)

#set text(
  font: "Times New Roman",
  size: 11pt,
  lang: "en",
)

#set par(justify: true, leading: 0.75em, spacing: 1.1em)

#set heading(numbering: none)
#show heading: it => block(above: 1.6em, below: 0.9em)[
  #set text(size: 13pt, weight: "bold", fill: rgb("#1f3a5f"))
  #it
]

#set list(indent: 1.2em, spacing: 0.7em)
#set enum(indent: 1.2em, spacing: 0.7em)

// Table cells read better ragged-right, without hyphenation.
#show table: set par(justify: false, leading: 0.62em)
#show table: set text(hyphenate: false)

#align(center)[
  #text(size: 19pt, weight: "bold", fill: rgb("#1f3a5f"))[
    Problem Statement & Project Goal Statement
  ]
  #v(0.2em)
  #text(size: 11pt, fill: luma(90))[
    EventSafe Custom Checklist Management Tool \
    CivicaGov Solutions Sdn Bhd
  ]
]

#v(0.6em)

// ---------------------------------------------------------------------------
// Shared table styling
// ---------------------------------------------------------------------------

#let scope-table(columns, header, rows) = table(
  columns: columns,
  stroke: 0.5pt + luma(175),
  inset: (x: 8pt, y: 5pt),
  align: (left + top, left + top),
  fill: (col, row) => if row == 0 { luma(232) } else { white },
  table.header(..header.map(h => strong(h))),
  ..rows.flatten(),
)

// ---------------------------------------------------------------------------
// Problem statement
// ---------------------------------------------------------------------------

= Problem Statement

CivicaGov Solutions Sdn Bhd provides a safety checklist application called
*EventSafe*. The application currently faces two layers of problems.

#scope-table(
  (auto, 1fr),
  ("Layer", "Problem Description"),
  (
    (
      [*Layer 1*],
      [Due to the obsolete ingestion tooling which causes content specialists
        to rely on manual database scripts to create or update customized safety
        checklists, simple checklist updates take over 70% of the content team's
        operational capacity, and custom content requests end up taking three to
        four weeks to process.],
    ),
    (
      [*Layer 2*],
      [A breakdown in compliance tracing due to the fact that event organizers
        and compliance officers resort to paper documents, PDFs, and emails to
        handle the custom safety requirements, which operate outside the system.
        This breaks the dual-approval audit trail, which makes it difficult to
        verify whether both the compliance officers approved the custom content
        and the event organizer acknowledged the custom risk conditions.

        It also leaves an incomplete digital history of custom content changes
        and approval actions, making responsibilities difficult to trace. Thus,
        these issues create risks that relate to legal liability, insurance
        validity, and municipal audit standards.],
    ),
  ),
)

// ---------------------------------------------------------------------------
// Project goal statement
// ---------------------------------------------------------------------------

= Project Goal Statement

The goal of this project is to design and prototype a web-based custom
checklist management tool for EventSafe that aims to address the two layers of
problems. The project goals will focus on *reducing the custom content
processing time, while making sure both digital sign-offs are recorded, as well
as maintaining a complete and temper-evident history of content changes and
approvals.*

The project goals are broken down as follows:

+ The prototype will *reduce custom content processing time* from three to four
  weeks to under 24 hours by the end of *Sprint 2* for the purpose of allowing
  content specialists to create and update custom safety checklists without
  manually running database scripts *(Layer 1).*

+ The prototype will *ensure that 0% of custom checklists marked as fully
  approved are missing either required digital sign-off* by the end of the
  *Sprint 3*, for the purpose of reducing reliance on the off system workarounds
  and keeping records of both the compliance officer's digital approval and the
  event organizer's digital acknowledgement *(Layer 2).*

+ The prototype will *record 100% of custom content changes and approval
  sign-offs made through the prototype in a temper evident audit trail* by the
  end of *Sprint 4*, for the purpose of supporting compliance audits by showing
  who performed each action and when *(Layer 2).*

// ---------------------------------------------------------------------------
// Project scope
// ---------------------------------------------------------------------------

= Project Scope

== In Scope

#scope-table(
  (0.34fr, 1fr),
  ("Area", "Description"),
  (
    ([Dynamic content authoring],
      [Allow content specialists to create and update custom safety checklists
        through an interface that does not require manual database scripting.
        Support flexible checklist structures without hardcoding databases.]),
    ([Custom request tracking],
      [Provide a view of pending custom-content requests and their progress to
        help the content team manage its workload.]),
    ([Digital dual-approval gateway],
      [Allow compliance officers to review and approve or reject custom content,
        and event organizers to digitally acknowledge the custom risk
        conditions. Both required sign-offs would be recorded within the
        system.]),
    ([Tamper-evident audit trail],
      [Preserve a history of custom-content revisions and approval actions,
        including who performed each action and when, with evidence of
        alterations to the audit records.]),
    ([Three core user roles],
      [Support event organizers, internal compliance officers, and content
        specialists within one integrated web application, with features
        relevant to each role.]),
    ([Company-based access],
      [Restrict event organizers to their company's information, support
        multiple organizers within a company, and allow content specialists to
        access customer checklists across companies and countries.]),
    ([Time-zone considerations],
      [Account for different time zones when keeping records, as the client
        identified use of the product in Australia and the United Kingdom.]),
    ([Prototype and feedback],
      [Demonstrate the core functions through an interactive web prototype and
        refine them using client feedback. A working full-stack implementation
        would depend on the team's available time and resources.]),
  ),
)

== Out of Scope

#scope-table(
  (0.34fr, 1fr),
  ("Area", "Description"),
  (
    ([Rebuilding existing checklist-use functionality],
      [Rebuilding the full process used by organizers to carry out checklists at
        events. The client said this existing functionality could be assumed to
        be available. This does not exclude reviewing and acknowledging custom
        risk conditions.]),
    ([Additional primary user roles],
      [Separate functionality for traffic police, safety auditors, and excursion
        coordinators. The client limited the initial prototype to the three core
        roles.]),
    ([Separate native applications],
      [Developing standalone native mobile or desktop applications, as the
        agreed prototype approach is web-based.]),
    ([Separate portals for each role],
      [Developing and maintaining independent applications or domains for each
        of the three user roles, based on the client's preference for having all
        user roles in one integrated application.]),
  ),
)
