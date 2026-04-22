import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/11-testplanstart/01.png';
import img02 from '../../assets/user_guide/11-testplanstart/02.png';
import img03 from '../../assets/user_guide/11-testplanstart/03.png';
import img04 from '../../assets/user_guide/11-testplanstart/04.png';
import img05 from '../../assets/user_guide/11-testplanstart/05.png';

const TestExecution = () => (
  <article className="guide-article">
    <h1>11. 테스트 실행</h1>
    <p className="guide-lead">
      테스트 플랜 안의 테스트 케이스(실행 항목)를 실제로 실행하고 결과를 기록하는 과정입니다. T-CAFE의 핵심 사용 흐름입니다.
    </p>

    <hr />

    <h2>1. 실행 전 준비</h2>

    <h3>진입 경로</h3>
    <p>상단 탭 → <strong>Test Plans</strong> → 실행할 TP 클릭</p>

    <h3>사전 확인</h3>
    <ul>
      <li>TP의 상태가 <strong>Open</strong> (또는 사용자 정의된 진행 중 상태)인지 확인 (Prepairing은 실행 시작 전)</li>
      <li>실행 항목 상태 변경(Pass/Fail 등)은 <strong>Admin / Team Admin / Tester</strong>만 가능. Developer는 조회와 코멘트 입력만 가능</li>
    </ul>

    <h3>화면 구성</h3>
    <ul>
      <li><strong>상단</strong>: TP 정보 (이름, 진행률, 통계)</li>
      <li><strong>좌측</strong>: TP 폴더 + 실행 항목 목록</li>
      <li><strong>중앙/우측</strong>: 선택한 실행 항목 상세 (스텝 미리보기 + 실행 패널)</li>
    </ul>

    <ScreenshotSlot label="테스트 실행 화면" src={img01} />

    <hr />

    <h2>2. 권한별 실행 가능 작업</h2>
    <table>
      <thead>
        <tr>
          <th>작업</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>실행 항목 실행 (상태 변경)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Start Date / End Date 편집</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>코멘트 입력</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center"><strong>O</strong></td></tr>
        <tr><td>Issue 생성</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Issue 연결</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>첨부파일 추가 (Attachments 페이지 통해)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>실행 항목 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>
    <aside className="guide-callout"><strong>Admin / Team Admin / Tester는 테스트 실행과 코멘트를 모두 수행할 수 있습니다.</strong> Developer는 조회와 코멘트만 가능하며, 상태 변경·Start/End Date 편집·Issue 생성/연결은 불가합니다.</aside>

    <hr />

    <h2>3. 실행 상태 (Execution Status)</h2>
    <p>각 실행 항목은 다음 5가지 상태 중 하나를 가집니다:</p>
    <table>
      <thead>
        <tr><th>상태</th><th>영문</th><th>색상</th><th>의미</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>미실행</strong></td><td>Not Yet</td><td>회색</td><td>아직 실행하지 않음 (초기 상태)</td></tr>
        <tr><td><strong>통과</strong></td><td>Pass</td><td>녹색</td><td>모든 스텝이 정상 동작, 기대 결과 일치</td></tr>
        <tr><td><strong>실패</strong></td><td>Fail</td><td>빨강</td><td>한 개 이상의 스텝에서 기대 결과와 다름</td></tr>
        <tr><td><strong>차단</strong></td><td>Block</td><td>주황</td><td>다른 문제로 실행 불가 (사전 조건 미충족 등)</td></tr>
        <tr><td><strong>건너뜀</strong></td><td>Skip</td><td>노랑</td><td>의도적으로 실행 안 함</td></tr>
      </tbody>
    </table>

    <h3>상태 결정 기준</h3>
    <ul>
      <li><strong>Pass</strong>: 모든 스텝이 기대 결과와 일치</li>
      <li><strong>Fail</strong>: 단 하나라도 기대 결과와 다르면 Fail</li>
      <li><strong>Block</strong>: 환경 문제, 사전 조건 미충족, 의존 TC가 Fail 등</li>
      <li><strong>Skip</strong>: 시간 부족, 우선순위 낮음, 적용 불가 등 의도적 미실행</li>
    </ul>

    <hr />

    <h2>4. 실행 절차</h2>

    <h3>Step 1: 실행 항목 선택</h3>
    <ol>
      <li>Test Plans 목록에서 실행할 TP 클릭 → TP 상세 페이지 진입</li>
      <li>상단의 <strong>Test Cases</strong> 탭 클릭 → 실행 화면으로 이동</li>
      <li>좌측 폴더 트리·목록에서 실행할 실행 항목(TC) 클릭</li>
      <li>우측 패널에 해당 실행 항목의 상세 정보가 표시됩니다 (이름, Precondition, Test Step, 연결된 Issue 등)</li>
    </ol>

    <h3>Step 2: 사전 조건 확인</h3>
    <ul>
      <li>우측에 표시된 <strong>Precondition</strong> 확인</li>
      <li>환경이 갖춰져 있는지 점검</li>
    </ul>

    <h3>Step 3: 스텝 수행</h3>
    <ol>
      <li>첫 번째 스텝부터 순서대로 수행</li>
      <li>각 스텝의 <strong>Step</strong>, <strong>Test Data</strong>, <strong>Expected Result</strong> 확인</li>
      <li>실제 동작을 진행하고 결과 비교</li>
    </ol>

    <h3>Step 4: 상태 선택</h3>
    <ol>
      <li>우측 패널에서 <strong>Pass / Fail / Block / Skip / Not Yet</strong> 중 해당 상태 선택</li>
      <li>클릭 즉시 자동 저장됨</li>
      <li><strong>Block</strong> 또는 <strong>Skip</strong> 선택 시 사유 입력 창이 표시되므로 간단한 사유 입력 후 확정</li>
    </ol>
    <p>상태는 실행 항목 단위로 기록되며, T-CAFE는 스텝 단위 개별 Pass/Fail 기록 기능을 제공하지 않습니다.</p>

    <ScreenshotSlot label="Status 변경" src={img02} />

    <h3>Step 5: 다음 실행 항목으로 이동</h3>
    <ul>
      <li>좌측 목록에서 다음 실행 항목을 직접 클릭하여 이동</li>
    </ul>

    <hr />

    <h2>5. 코멘트 입력</h2>
    <p>각 실행 항목에 코멘트를 남길 수 있습니다.</p>

    <h3>사용 사례</h3>
    <ul>
      <li><strong>Pass</strong>: "버전 1.5에서 검증 완료. 성능 양호"</li>
      <li><strong>Fail</strong>: "Step 3에서 실패. 에러 메시지: '500 Internal Server Error'. 스크린샷 첨부"</li>
      <li><strong>Block</strong>: "테스트 환경 DB 접속 불가. DBA 확인 요청"</li>
      <li><strong>Skip</strong>: "이번 스프린트는 모바일 환경 미지원으로 Skip"</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>실행 항목 우측 패널의 <strong>Comments</strong> 섹션을 펼침</li>
      <li>입력란(텍스트 영역)에 내용 작성 — 리치 텍스트 에디터가 아닌 단순 텍스트 입력</li>
      <li><strong>Commit</strong> 버튼 클릭 (또는 Ctrl+Enter)으로 저장</li>
    </ol>

    <h3>코멘트 특징</h3>
    <ul>
      <li>저장된 코멘트는 실행 이력(history)으로 누적되며, 현재 상태/작성자/작성 시각과 함께 기록됨</li>
      <li>코멘트 자체에 대한 인라인 수정·삭제 UI는 제공되지 않음 (이력에 누적됨)</li>
    </ul>

    <ScreenshotSlot label="코멘트 화면" src={img03} />

    <hr />

    <h2>6. Jira Issue 생성 / 연결</h2>
    <p>테스트 실패 시 바로 Jira Issue를 생성하거나 기존 Issue를 연결할 수 있습니다.</p>

    <h3>6-1. 새 Issue 생성</h3>

    <h4>절차</h4>
    <ol>
      <li>실행 항목 우측 패널의 <strong>Issues</strong> 섹션 열기</li>
      <li>Issue 생성 버튼 클릭 → CreateIssueModal이 열림</li>
      <li>모달에서 입력:
        <ul>
          <li>프로젝트: 현재 Jira 프로젝트 자동 사용</li>
          <li>Issue Type: Bug가 있으면 자동 선택 (없으면 첫 번째 타입)</li>
          <li>Reporter: 현재 사용자 자동 설정</li>
          <li>Summary: 사용자가 직접 입력</li>
          <li>Description: 기본 템플릿(재현 / 테스트 데이터 / 결함 설명 빈칸)이 제공되며, 사용자가 리치 텍스트 에디터로 채워 넣음</li>
          <li>Assignee / 커스텀 필드 등 프로젝트별 필드</li>
          <li>필요 시 파일/이미지 첨부 (이미지 에디터 제공)</li>
        </ul>
      </li>
      <li><strong>Create</strong> 버튼으로 Jira에 Issue 생성 → 실행 항목에 자동 연결</li>
    </ol>

    <aside className="guide-callout info">
      T-CAFE는 Summary나 Description 본문을 실행 항목 정보로 자동으로 미리 채우지 않습니다. 기본 Description 템플릿의 빈칸(재현 / 테스트 데이터 / 결함 설명)을 테스터가 직접 채우는 방식입니다.
    </aside>

    <h3>6-2. 기존 Issue 연결</h3>

    <h4>절차</h4>
    <ol>
      <li><strong>+ Link Issue</strong> 버튼</li>
      <li>Issue 검색 (키 또는 요약)</li>
      <li>검색 결과에서 선택</li>
      <li><strong>Link</strong></li>
    </ol>

    <h3>6-3. Issue 연결 해제</h3>
    <ol>
      <li>연결된 Issue 우측의 <strong>Unlink</strong> 버튼</li>
      <li>확인 → 연결만 해제 (Issue 자체는 유지)</li>
    </ol>

    <ScreenshotSlot label="Linked Issues" src={img04} />

    <hr />

    <h2>7. 첨부파일 활용</h2>
    <p>T-CAFE는 실행 항목 실행 패널 안에 별도의 첨부파일 업로드 UI를 제공하지 않습니다. 실행 중 캡처한 스크린샷이나 로그는 다음과 같이 사용하세요:</p>

    <h3>절차</h3>
    <ol>
      <li>상단 탭 → <strong>Attachments</strong>에서 파일 업로드</li>
      <li>업로드된 파일의 다운로드 URL 복사</li>
      <li>실행 항목의 <strong>Comments</strong> 입력란에 URL 붙여넣기 → 자동으로 클릭 가능한 링크로 변환</li>
      <li>또는 실패 시 <strong>+ Create Issue</strong>로 Jira 이슈를 생성하면, 그 이슈 작성 모달에서 직접 파일 첨부 가능</li>
    </ol>

    <h3>첨부파일 저장 용량</h3>
    <ul>
      <li>프로젝트 전체 저장 한도: <strong>200 MB</strong> (Attachments 페이지 기준)</li>
      <li>자세한 내용은 <Link to="/support/guide/attachments">14. 첨부파일</Link> 참고</li>
    </ul>

    <hr />

    <h2>8. Retestable (재테스트 필요)</h2>
    <p>연결된 Jira Issue가 완료 상태에 도달하면 해당 실행 항목이 자동으로 <strong>Retestable</strong>로 표시됩니다.</p>

    <h3>동작 방식</h3>
    <ul>
      <li>실행 항목에 Jira Issue를 연결한 상태에서</li>
      <li>해당 Issue가 Configuration → Issue Type에서 설정한 <strong>완료 상태</strong>로 변경되면</li>
      <li>T-CAFE가 자동으로 Retestable을 <strong>Yes</strong>로 전환합니다</li>
      <li>실행 항목 상세에서 Retestable 상태가 "Yes" 또는 "No"로 표시됩니다 (읽기 전용)</li>
    </ul>

    <h3>활용</h3>
    <ul>
      <li>별도 필터로 Retestable 실행 항목만 모아 볼 수 있음</li>
      <li>버그 수정 후 재검증이 필요한 항목을 빠르게 파악</li>
      <li>재테스트 누락 방지</li>
    </ul>

    <h3>설정</h3>
    <p>어떤 워크플로 상태를 "완료"로 간주할지는 <Link to="/support/guide/configuration">13. Configuration</Link>의 <strong>Issue Type (Retestable)</strong> 섹션에서 설정합니다.</p>

    <hr />

    <h2>9. 실행 진행률 확인</h2>

    <h3>TP 단위 통계</h3>
    <p>TP 상세 페이지 상단에 다음이 표시됩니다:</p>
    <ul>
      <li>전체 실행 항목 개수</li>
      <li>Pass / Fail / Block / Skip / Not Yet 카운트</li>
      <li>진행률 % — <code>(Pass + Fail + Block) / (전체 - Skip) × 100</code></li>
    </ul>

    <h3>색상 기준</h3>
    <ul>
      <li>Pass / Fail / Block / Skip / Not Yet 각각에 고유 색상이 지정되어 목록과 통계 바에 일관되게 표시됩니다</li>
    </ul>

    <ScreenshotSlot label="통계 막대" src={img05} />

    <hr />

    {/* <h2>10. 자동화 결과 Import (향후 기능)</h2>
    <aside className="guide-callout">본 기능은 현재 <strong>로드맵 단계</strong>입니다. T-CAFE의 향후 버전에서 지원 예정.</aside>
    <p>CI/CD 파이프라인에서 실행한 자동화 테스트(JUnit XML, Cucumber JSON 등)의 결과를 T-CAFE로 가져오는 기능입니다.</p>

    <hr /> */}

    <h2>10. 실행 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>순서대로 실행</strong>: 의존성이 있는 실행 항목은 순서대로</li>
      <li><strong>즉시 결과 기록</strong>: 실행 후 바로 상태 변경</li>
      <li><strong>상세한 코멘트</strong>: Fail 시 재현 가능한 정보 남기기</li>
      <li><strong>스크린샷 첨부</strong>: 시각적 증거 보관</li>
      <li><strong>Issue 즉시 생성</strong>: Fail 발견 시 미루지 말고 바로 생성</li>
      <li><strong>Block 사유 명시</strong>: 왜 Block인지 코멘트로 설명</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>결과를 나중에 한꺼번에 기록 (실수 위험)</li>
      <li>모호한 코멘트 ("안 됨", "에러")</li>
      <li>Fail인데 그냥 Skip으로 넘기기</li>
      <li>같은 환경에서 5번 실패해도 계속 재시도</li>
      <li>다른 사람의 실행 항목 결과를 임의로 변경</li>
    </ul>

    <hr />

    <h2>11. TC 재추가 시 자동 갱신</h2>
    <h3>TC 재추가 시 자동 갱신</h3>
    <p>이미 Test Plan에 포함된 TC를 다시 추가하면, 기존 실행 항목이 최신 TC 데이터로 자동 갱신됩니다.</p>
    <ul>
      <li><strong>갱신되는 항목</strong>: TC 이름, 설명, 사전조건, 테스트 스텝, 우선순위, 케이스타입, 컴포넌트, 라벨, 사용자 정의 필드</li>
      <li><strong>보존되는 항목</strong>: 실행 상태(Pass/Fail 등), 마지막 실행 일시, 실행자, 코멘트, 연결 이슈, Retestable 표시</li>
    </ul>
    <aside className="guide-callout">TC 본문을 수정한 후 같은 Test Plan에 다시 추가하면, 실행 이력을 잃지 않고 최신 내용으로 갱신할 수 있습니다.</aside>

    <hr />

    <h2>12. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Pass/Fail 등 상태 변경 불가</td><td>Developer 권한</td><td>Tester 이상 필요 (Developer는 조회·코멘트만 가능)</td></tr>
        <tr><td>Start/End Date 편집 불가</td><td>Developer 권한</td><td>Tester 이상 필요</td></tr>
        <tr><td>Issue 생성 버튼이 안 보임</td><td>Developer 권한</td><td>Tester 이상 필요</td></tr>
        <tr><td>Issue 생성 실패</td><td>Jira 권한 부족</td><td>Jira에서 Create Issue 권한 확인</td></tr>
        <tr><td>Issue가 검색되지 않음</td><td>다른 프로젝트의 Issue</td><td>같은 프로젝트만 검색 가능</td></tr>
        <tr><td>첨부파일 업로드 실패</td><td>프로젝트 저장 한도(200 MB) 초과</td><td>Attachments에서 기존 첨부 정리 후 재시도</td></tr>
        <tr><td>통계가 갱신 안 됨</td><td>페이지 캐시</td><td>새로고침</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>14. 일반적인 실행 흐름 (스프린트 관점)</h2>
    <pre><code>{`[월요일] TP 생성, TC 추가
 ↓
[화요일] 실행 시작 → 50% 완료
 ├─ Pass: 30개
 ├─ Fail: 5개 → Issue 5개 생성
 ├─ Block: 2개 → 코멘트로 사유 기록
 └─ Not Yet: 13개
 ↓
[수요일] 개발자가 Fail Issue 5개 수정 완료
 ↓
[목요일] Retestable 표시된 5개 다시 실행
 ├─ 다시 실행 → 4개 Pass, 1개 Fail
 └─ Block 2개 환경 복구 후 재실행 → 2개 Pass
 ↓
[금요일] 모든 실행 항목 완료
 ├─ Pass: 47개
 ├─ Fail: 1개 (다음 스프린트로 연기)
 ├─ Skip: 2개
 └─ TP 상태: Completed
 ↓
[금요일 오후] 리포트 생성 후 공유`}</code></pre>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-reports">12. 테스트 리포트</Link> — 실행 결과 리포트</li>
      <li><Link to="/support/guide/attachments">14. 첨부파일</Link> — 첨부파일 자세한 사용법</li>
    </ul>
  </article>
);

const TestExecutionEn = () => (
  <article className="guide-article">
    <h1>11. Test Execution</h1>
    <p className="guide-lead">
      The process of actually running the test cases (execution items) inside a Test Plan and recording the results. This is the core usage flow of T-CAFE.
    </p>

    <hr />

    <h2>1. Before Executing</h2>

    <h3>Navigation</h3>
    <p>Top tab → <strong>Test Plans</strong> → click the TP to execute</p>

    <h3>Pre-check</h3>
    <ul>
      <li>Confirm the TP status is <strong>Open</strong> (or a custom in-progress status). Prepairing means execution has not started</li>
      <li>Execution-item status changes (Pass/Fail, etc.) require <strong>Admin / Team Admin / Tester</strong>. Developers can only view and add comments</li>
    </ul>

    <h3>Layout</h3>
    <ul>
      <li><strong>Top</strong>: TP info (name, progress, stats)</li>
      <li><strong>Left</strong>: TP folders + execution-item list</li>
      <li><strong>Center / right</strong>: details of the selected execution item (step preview + execution panel)</li>
    </ul>

    <ScreenshotSlot label="Test execution screen" src={img01} />

    <hr />

    <h2>2. Actions by Role</h2>
    <table>
      <thead>
        <tr>
          <th>Action</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Execute item (change status)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Edit Start Date / End Date</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Add comment</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center"><strong>O</strong></td></tr>
        <tr><td>Create issue</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Link issue</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Add attachment (via the Attachments page)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>View execution item</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>
    <aside className="guide-callout"><strong>Admin / Team Admin / Tester can execute tests and leave comments.</strong> Developers can only view and add comments — status changes, Start/End Date edits, and Create/Link Issue are not permitted.</aside>

    <hr />

    <h2>3. Execution Status</h2>
    <p>Each execution item has one of the following 5 statuses:</p>
    <table>
      <thead>
        <tr><th>Status</th><th>Key</th><th>Color</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Not Yet</strong></td><td>Not Yet</td><td>Gray</td><td>Not yet executed (initial state)</td></tr>
        <tr><td><strong>Pass</strong></td><td>Pass</td><td>Green</td><td>All steps worked as expected</td></tr>
        <tr><td><strong>Fail</strong></td><td>Fail</td><td>Red</td><td>At least one step differs from the expected result</td></tr>
        <tr><td><strong>Block</strong></td><td>Block</td><td>Orange</td><td>Could not be executed due to other issues (unmet preconditions, etc.)</td></tr>
        <tr><td><strong>Skip</strong></td><td>Skip</td><td>Yellow</td><td>Intentionally not executed</td></tr>
      </tbody>
    </table>

    <h3>How to Decide Status</h3>
    <ul>
      <li><strong>Pass</strong>: every step matches the expected result</li>
      <li><strong>Fail</strong>: even one mismatch makes it Fail</li>
      <li><strong>Block</strong>: environment issues, unmet preconditions, a dependent TC is Fail, etc.</li>
      <li><strong>Skip</strong>: intentional skip — time pressure, low priority, not applicable, etc.</li>
    </ul>

    <hr />

    <h2>4. Execution Procedure</h2>

    <h3>Step 1: Select an Execution Item</h3>
    <ol>
      <li>In the Test Plans list, click the TP to execute → open the TP detail page</li>
      <li>Click the <strong>Test Cases</strong> tab at the top → go to the execution screen</li>
      <li>Click the execution item (TC) to run in the left folder tree / list</li>
      <li>The right panel shows that execution item's details (name, Precondition, Test Steps, linked issues, etc.)</li>
    </ol>

    <h3>Step 2: Check the Precondition</h3>
    <ul>
      <li>Review the <strong>Precondition</strong> on the right</li>
      <li>Verify the environment is ready</li>
    </ul>

    <h3>Step 3: Perform the Steps</h3>
    <ol>
      <li>Work through the steps in order, starting with step 1</li>
      <li>Check each step's <strong>Step</strong>, <strong>Test Data</strong>, and <strong>Expected Result</strong></li>
      <li>Perform the actual action and compare the result</li>
    </ol>

    <h3>Step 4: Choose Status</h3>
    <ol>
      <li>In the right panel, choose <strong>Pass / Fail / Block / Skip / Not Yet</strong></li>
      <li>The change is saved automatically on click</li>
      <li>When <strong>Block</strong> or <strong>Skip</strong> is selected, a reason input appears — enter a short reason and confirm</li>
    </ol>
    <p>Status is recorded per execution item. T-CAFE does not offer per-step Pass / Fail recording.</p>

    <ScreenshotSlot label="Changing status" src={img02} />

    <h3>Step 5: Move to the Next Item</h3>
    <ul>
      <li>Click the next execution item in the left list to move to it</li>
    </ul>

    <hr />

    <h2>5. Adding Comments</h2>
    <p>You can leave comments on each execution item.</p>

    <h3>Use Cases</h3>
    <ul>
      <li><strong>Pass</strong>: "Verified on v1.5. Performance is good"</li>
      <li><strong>Fail</strong>: "Fails at Step 3. Error message: '500 Internal Server Error'. Screenshot attached"</li>
      <li><strong>Block</strong>: "Cannot connect to the test DB. Waiting on DBA"</li>
      <li><strong>Skip</strong>: "Skip this sprint — mobile environment not yet supported"</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Expand the <strong>Comments</strong> section in the right panel of the execution item</li>
      <li>Type into the input area (plain text — not a rich-text editor)</li>
      <li>Save with the <strong>Commit</strong> button (or Ctrl+Enter)</li>
    </ol>

    <h3>Comment Characteristics</h3>
    <ul>
      <li>Saved comments accumulate in the execution history with the current status, author, and timestamp</li>
      <li>No inline edit / delete UI is provided for individual comments (they remain in the history)</li>
    </ul>

    <ScreenshotSlot label="Comments" src={img03} />

    <hr />

    <h2>6. Creating / Linking Jira Issues</h2>
    <p>When a test fails you can immediately create a Jira issue, or link an existing one.</p>

    <h3>6-1. Creating a New Issue</h3>

    <h4>Steps</h4>
    <ol>
      <li>Open the <strong>Issues</strong> section in the execution-item right panel</li>
      <li>Click the Create Issue button → CreateIssueModal opens</li>
      <li>Fill in the modal:
        <ul>
          <li>Project: the current Jira project is used automatically</li>
          <li>Issue Type: Bug is selected automatically if present (otherwise the first type)</li>
          <li>Reporter: current user is set automatically</li>
          <li>Summary: entered by the user</li>
          <li>Description: a default template is provided (blanks for reproduction / test data / defect description) for the user to fill in via the rich-text editor</li>
          <li>Assignee / per-project custom fields</li>
          <li>Optionally attach files / images (image editor provided)</li>
        </ul>
      </li>
      <li>Click <strong>Create</strong> — the issue is created in Jira and auto-linked to the execution item</li>
    </ol>

    <aside className="guide-callout info">
      T-CAFE does not auto-prefill Summary or Description from the execution item. The tester fills in the blanks in the default Description template (reproduction / test data / defect description).
    </aside>

    <h3>6-2. Linking an Existing Issue</h3>

    <h4>Steps</h4>
    <ol>
      <li><strong>+ Link Issue</strong> button</li>
      <li>Search for the issue (key or summary)</li>
      <li>Select from the results</li>
      <li>Click <strong>Link</strong></li>
    </ol>

    <h3>6-3. Unlinking an Issue</h3>
    <ol>
      <li>Click <strong>Unlink</strong> next to the linked issue</li>
      <li>Confirm → only the link is removed (the issue itself remains)</li>
    </ol>

    <ScreenshotSlot label="Linked Issues" src={img04} />

    <hr />

    <h2>7. Using Attachments</h2>
    <p>T-CAFE does not provide a separate attachment-upload UI inside the execution-item panel. Use screenshots or logs captured during execution like this:</p>

    <h3>Steps</h3>
    <ol>
      <li>Top tab → upload the file on <strong>Attachments</strong></li>
      <li>Copy the download URL of the uploaded file</li>
      <li>Paste the URL into the execution item's <strong>Comments</strong> — it becomes a clickable link automatically</li>
      <li>Or, when failing, open <strong>+ Create Issue</strong> and attach the file directly in the issue-creation modal</li>
    </ol>

    <h3>Attachment Storage</h3>
    <ul>
      <li>Project-wide storage limit: <strong>200 MB</strong> (based on the Attachments page)</li>
      <li>See <Link to="/support/guide/attachments">14. Attachments</Link> for details</li>
    </ul>

    <hr />

    <h2>8. Retestable</h2>
    <p>When a linked Jira issue reaches a completion status, the execution item is marked <strong>Retestable</strong> automatically.</p>

    <h3>How it Works</h3>
    <ul>
      <li>The execution item has a Jira issue linked</li>
      <li>That issue changes to a <strong>completion status</strong> defined in Configuration → Issue Type</li>
      <li>T-CAFE automatically flips Retestable to <strong>Yes</strong></li>
      <li>The execution-item detail shows Retestable as "Yes" or "No" (read-only)</li>
    </ul>

    <h3>Usage</h3>
    <ul>
      <li>You can filter the list to Retestable items only</li>
      <li>Quickly find items that need re-verification after bug fixes</li>
      <li>Prevent missed retests</li>
    </ul>

    <h3>Configuration</h3>
    <p>Choose which workflow states count as "complete" in the <strong>Issue Type (Retestable)</strong> section of <Link to="/support/guide/configuration">13. Configuration</Link>.</p>

    <hr />

    <h2>9. Checking Execution Progress</h2>

    <h3>TP-level Stats</h3>
    <p>The top of the TP detail page shows:</p>
    <ul>
      <li>Total execution-item count</li>
      <li>Pass / Fail / Block / Skip / Not Yet counts</li>
      <li>Progress % — <code>(Pass + Fail + Block) / (total − Skip) × 100</code></li>
    </ul>

    <h3>Color Scheme</h3>
    <ul>
      <li>Pass / Fail / Block / Skip / Not Yet each have dedicated colors, applied consistently in the list and stats bar</li>
    </ul>

    <ScreenshotSlot label="Stats bar" src={img05} />

    <hr />

    {/* <h2>10. Importing Automation Results (Future)</h2>
    <aside className="guide-callout">This feature is currently on the <strong>roadmap</strong>. Planned for a future version of T-CAFE.</aside>
    <p>A feature to import automated test results (JUnit XML, Cucumber JSON, etc.) from a CI/CD pipeline into T-CAFE.</p>

    <hr /> */}

    <h2>10. Execution Best Practices</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>Run in order</strong>: execute items with dependencies sequentially</li>
      <li><strong>Record results immediately</strong>: update the status right after running</li>
      <li><strong>Detailed comments</strong>: leave reproducible information on Fail</li>
      <li><strong>Attach screenshots</strong>: keep visual evidence</li>
      <li><strong>Create issues promptly</strong>: when a Fail is found, file it right away</li>
      <li><strong>Explain Block reasons</strong>: note why it was blocked in a comment</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>Record results all at once later (risk of mistakes)</li>
      <li>Vague comments ("doesn't work", "error")</li>
      <li>Marking Fails as Skip</li>
      <li>Retrying 5 times in the same environment after failures</li>
      <li>Changing others' execution results without reason</li>
    </ul>

    <hr />

    <h2>11. Auto-Update on Re-adding a TC</h2>
    <h3>Auto-Update on Re-adding a TC</h3>
    <p>If you add a TC that is already in a Test Plan again, the existing execution item is automatically updated with the latest TC data.</p>
    <ul>
      <li><strong>Updated fields</strong>: TC name, description, precondition, test steps, priority, case type, components, labels, user-defined fields</li>
      <li><strong>Preserved fields</strong>: execution status (Pass / Fail, etc.), last executed time, executor, comments, linked issues, Retestable flag</li>
    </ul>
    <aside className="guide-callout">After editing the TC body, re-adding it to the same Test Plan updates it to the latest content without losing execution history.</aside>

    <hr />

    <h2>12. Common Issues</h2>
    <table>
      <thead>
        <tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td>Cannot change Pass/Fail status</td><td>Developer role</td><td>Tester or higher is required (Developers can only view / comment)</td></tr>
        <tr><td>Cannot edit Start/End Date</td><td>Developer role</td><td>Tester or higher is required</td></tr>
        <tr><td>Create Issue button is not visible</td><td>Developer role</td><td>Tester or higher is required</td></tr>
        <tr><td>Issue creation fails</td><td>Insufficient Jira permission</td><td>Check Create Issue permission in Jira</td></tr>
        <tr><td>Issue not found in search</td><td>Issue in a different project</td><td>Search is limited to the same project</td></tr>
        <tr><td>Attachment upload fails</td><td>Project storage limit (200 MB) exceeded</td><td>Clean up existing attachments in Attachments and retry</td></tr>
        <tr><td>Stats do not refresh</td><td>Page cache</td><td>Refresh</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>14. Typical Execution Flow (sprint view)</h2>
    <pre><code>{`[Monday] Create TP, add TCs
 ↓
[Tuesday] Start execution → 50% done
 ├─ Pass: 30
 ├─ Fail: 5 → 5 issues created
 ├─ Block: 2 → reason noted in comments
 └─ Not Yet: 13
 ↓
[Wednesday] Developer fixes the 5 failing issues
 ↓
[Thursday] Re-run the 5 Retestable items
 ├─ Re-run → 4 Pass, 1 Fail
 └─ Environment restored, rerun the 2 Block items → 2 Pass
 ↓
[Friday] All execution items complete
 ├─ Pass: 47
 ├─ Fail: 1 (carried over to the next sprint)
 ├─ Skip: 2
 └─ TP status: Completed
 ↓
[Friday afternoon] Generate and share the report`}</code></pre>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/test-reports">12. Test Reports</Link> — execution result reports</li>
      <li><Link to="/support/guide/attachments">14. Attachments</Link> — detailed attachment usage</li>
    </ul>
  </article>
);

export default { ko: <TestExecution />, en: <TestExecutionEn /> };
