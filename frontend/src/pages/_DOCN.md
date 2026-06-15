# Pages Documentation

## Purpose

The pages folder contains route-level modules.
Each page represents a complete user workflow.

---

## Modules

| Folder / File | Purpose |
|---------------|----------|
| AuthLayout.tsx | Route protection and authentication guard |
| auth | Authentication workflows |
| dashboard | Dashboard workflows |
| doc | Project documentation page |
| layout | Application shell |
| not-found | 404 handling |
| publish | Publishing workflow |
| question | Question workflow |
| test | Test creation and editing |
| tracking | Lifecycle tracking |

---

## Responsibilities

* Route rendering
* Module orchestration
* User workflows
* Navigation control
* Route protection

---

## Notes

Pages coordinate components, contexts, hooks and services.

---

## AuthLayout.tsx

### Props

| Prop | Type | Description |
|--------|--------|--------|
| authenticationRequired | boolean | Determines whether route requires authentication |

---

## auth

Authentication related pages.

### Main Files

| File | Purpose |
|--------|--------|
| Auth.tsx | Authentication module container |
| Login.tsx | User login form |
| Register.tsx | User registration form |
| AuthIllustration.tsx | Authentication visual section |

---

## dashboard

Dashboard workflow pages.

### Main Files

| File | Purpose |
|--------|--------|
| Dashboard.tsx | Dashboard module container |
| DashboardActions.tsx | Dashboard actions section |
| DashboardStats.tsx | Statistics section |
| RecentTests.tsx | Recent tests display |
| TestFilters.tsx | Search and filter controls |
| TestsTable.tsx | Tests listing |
| OverviewSkeleton.tsx | Overview loading state |
| TestsSkeleton.tsx | Tests loading state |

---

## doc

Documentation module.

### Main Files

| File | Purpose |
|--------|--------|
| Doc.tsx | Internal project documentation page |

---

## layout

Application shell and navigation.

### Main Files

| File | Purpose |
|--------|--------|
| Layout.tsx | Root application layout |
| Sidebar.tsx | Main navigation sidebar |
| InnerSidebar.tsx | Workflow navigation panel |
| Header.tsx | Top navigation bar |
| DashboardNav.tsx | Dashboard workflow navigation |
| QuestionNav.tsx | Question workflow navigation |

---

## not-found

### Main Files

| File | Purpose |
|--------|--------|
| NotFound.tsx | Fallback route page |

---

## publish

Publishing workflow.

### Main Files

| File | Purpose |
|--------|--------|
| Publish.tsx | Publishing module container |
| PublishActions.tsx | Publish actions |
| PublishAvailability.tsx | Availability configuration |
| PublishModeTabs.tsx | Publish mode selection |
| PublishProgress.tsx | Workflow progress |
| PublishSchedule.tsx | Schedule configuration |
| PublishSkeleton.tsx | Loading state |

---

## question

Question creation workflow.

### Main Files

| File | Purpose |
|--------|--------|
| Question.tsx | Question workflow container |
| QuestionEditor.tsx | Question content editor |
| QuestionOptions.tsx | Option management |
| QuestionExplanation.tsx | Explanation editor |
| QuestionSettings.tsx | Question metadata settings |
| QuestionsActions.tsx | Workflow actions |
| QuestionHeader.tsx | Workflow header |
| QuestionCsvImportModal.tsx | CSV import workflow |
| QuestionMarkingSchemeModal.tsx | Marking scheme editor |

---

## test

Test creation and editing workflow.

### Main Files

| File | Purpose |
|--------|--------|
| Test.tsx | Test workflow container |
| TestActions.tsx | Workflow actions |
| TestCategoryTabs.tsx | Category selection |
| TestDetailsSection.tsx | Test information section |
| TestDifficultySection.tsx | Difficulty selection |
| TestMarksSection.tsx | Marking configuration |
| TestSubjectTopicSelection.tsx | Hierarchy selection |
| ResumeDraftModal.tsx | Draft restoration modal |
| TestSkeleton.tsx | Loading state |

---

## tracking

Tracking workflow.

### Main Files

| File | Purpose |
|--------|--------|
| Tracking.tsx | Test lifecycle tracking page |

---

## Props/Types info 

## AuthLayout.tsx

### Props

| Prop | Type | Description |
|--------|--------|--------|
| authenticationRequired | boolean | Route protection requirement |

---

## auth

### Login.tsx

#### Interfaces

| Interface | Purpose |
|------------|----------|
| ApiError | Authentication error response model |

### Register.tsx

#### Interfaces

| Interface | Purpose |
|------------|----------|
| ApiError | Registration error response model |

---

## layout

### Layout.tsx

#### Props

None

### DashboardNav.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| collapsed | boolean | Navigation collapsed state |

### Header.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| onMenuClick | () => void | Mobile sidebar trigger |

### InnerSidebar.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| collapsed | boolean | Sidebar collapsed state |

### QuestionNav.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| collapsed | boolean | Sidebar collapsed state |

### Sidebar.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| mobileOpen | boolean | Mobile sidebar visibility |
| onClose | () => void | Mobile sidebar close handler |

## dashboard

### DashboardStats.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| stats | DashboardStatsData | Dashboard lifecycle metrics |
| onSelect | (filter) => void | Dashboard status filter handler |

---

### RecentTests.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| tests | any[] | Recent dashboard tests |

---

### TestFilters.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| search | string | Search value |
| status | string | Status filter |
| subject | string | Subject filter |
| subjects | Subject[] | Available subjects |
| onSearch | (value:string)=>void | Search handler |
| onStatusChange | (value:string)=>void | Status filter handler |
| onSubjectChange | (value:string)=>void | Subject filter handler |
| onRefresh | () => void | Reload tests |

#### Interfaces

| Interface | Purpose |
|------------|----------|
| Subject | Subject dropdown option |

---

### TestsTable.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| tests | any[] | Table rows |
| page | number | Current page |
| totalPages | number | Total available pages |
| onPageChange | (page:number)=>void | Pagination callback |
| isLoading | boolean | Infinite scroll loading state |

## test

### EditModal.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| title | string | Modal title |
| onEdit | () => void | Navigate to test editing |
| onQuestions | () => void | Navigate to questions workflow |
| onPublish | () => void | Navigate to publish workflow |

---

### ResumeDraftModal.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| onResume | () => void | Resume saved draft |
| onStartFresh | () => void | Discard draft and restart |

---

### TestActions.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| loading | boolean | Submit loading state |
| onCancel | () => void | Workflow cancel action |

---

### TestCategoryTabs.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| value | string | Selected category |
| onChange | (value:string)=>void | Category change handler |

---

### TestDetailsSection.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| name | string | Test name |
| totalTime | number | Test duration |
| onChange | Function | Field update handler |

---

### TestDifficultySection.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| value | string | Selected difficulty |
| onChange | (value:string)=>void | Difficulty change handler |

---

### TestMarksSection.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| correctMarks | number | Correct answer marks |
| wrongMarks | number | Wrong answer marks |
| unattemptMarks | number | Unattempted answer marks |
| totalQuestions | number | Total questions |
| totalMarks | number | Computed total marks |
| onChange | Function | Field update handler |

---

### TestSubjectTopicSelection.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| subjects | Subject[] | Available subjects |
| topics | Topic[] | Available topics |
| subTopics | SubTopic[] | Available subtopics |
| subjectId | string | Selected subject |
| topicValues | string[] | Selected topics |
| subTopicValues | string[] | Selected subtopics |
| onChange | Function | Field update handler |

---

## publish

### PublishActions.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| loading | boolean | Publish loading state |
| onCancel | () => void | Cancel publish workflow |

---

### PublishAvailability.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| value | AvailabilityType | Selected availability mode |
| endDate | string | Custom availability end date |
| endTime | string | Custom availability end time |
| onChange | Function | Availability change handler |
| onEndDateChange | Function | Date update handler |
| onEndTimeChange | Function | Time update handler |

---

### PublishModeTabs.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| value | PublishMode | Current publish mode |
| onChange | Function | Publish mode change handler |

---

### PublishProgress.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| completed | number | Completed questions |
| total | number | Total questions |

---

### PublishSchedule.tsx

#### Props

| Prop | Type | Description |
|--------|--------|--------|
| date | string | Scheduled publish date |
| time | string | Scheduled publish time |
| onDateChange | Function | Date update handler |
| onTimeChange | Function | Time update handler |

## Question 

## Props

### QuestionHeader

| Prop | Type | Description |
|--------|--------|--------|
| current | number | Current active question |
| total | number | Total configured questions |
| onReset | () => void | Reset current question |
| onMarkingScheme | () => void | Open marking scheme modal |
| onCsvImport | () => void | Open CSV import modal |

### QuestionEditor

| Prop | Type | Description |
|--------|--------|--------|
| value | string | Question content |
| onChange | (value:string) => void | Editor update handler |

### QuestionOptions

| Prop | Type | Description |
|--------|--------|--------|
| question | Question | Current question state |
| onChange | Function | Option update handler |

### QuestionExplanation

| Prop | Type | Description |
|--------|--------|--------|
| value | string | Explanation content |
| onChange | (value:string) => void | Explanation update handler |

### QuestionSettings

| Prop | Type | Description |
|--------|--------|--------|
| difficulty | string | Selected difficulty |
| topicId | string | Selected topic |
| subTopicId | string | Selected subtopic |
| topics | Topic[] | Available topics |
| subTopics | SubTopic[] | Available subtopics |
| onChange | Function | Settings update handler |

### QuestionsActions

| Prop | Type | Description |
|--------|--------|--------|
| currentQuestion | number | Active question number |
| totalQuestions | number | Total configured questions |
| loading | boolean | Submit loading state |
| onPrevious | () => void | Previous navigation |
| onNext | () => void | Next navigation |
| onSaveDraft | () => void | Draft save action |
| onSubmit | () => void | Submit questions action |

### QuestionMarkingSchemeModal

| Prop | Type | Description |
|--------|--------|--------|
| test | any | Active test |

### QuestionCsvImportModal

| Prop | Type | Description |
|--------|--------|--------|
| test | any | Active test |
| questions | any[] | Existing questions |
| setQuestions | (questions:any[]) => void | Questions updater |

---

## Interfaces

### QuestionOptions.tsx

| Name | Type | Description |
|--------|--------|--------|
| Props | Interface | Question options component props |

### QuestionSettings.tsx

| Name | Type | Description |
|--------|--------|--------|
| Props | Interface | Question settings component props |

### QuestionsActions.tsx

| Name | Type | Description |
|--------|--------|--------|
| Props | Interface | Question actions component props |

### QuestionHeader.tsx

| Name | Type | Description |
|--------|--------|--------|
| Props | Interface | Question header component props |

### QuestionMarkingSchemeModal.tsx

| Name | Type | Description |
|--------|--------|--------|
| Props | Interface | Marking scheme modal props |

### QuestionCsvImportModal.tsx

| Name | Type | Description |
|--------|--------|--------|
| Props | Interface | CSV import modal props |