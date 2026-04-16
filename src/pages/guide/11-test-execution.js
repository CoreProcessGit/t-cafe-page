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
      <li>TP의 상태가 <strong>Open</strong> (또는 사용자 정의된 진행 중 상태)인지 확인 (Draft는 실행 시작 전)</li>
      <li>실행 항목 상태 변경과 코멘트 입력은 모든 역할(Admin / Team Admin / Tester / Developer)이 수행 가능</li>
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
        <tr><td>실행 항목 실행 (상태 변경)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center"><strong>O</strong></td></tr>
        <tr><td>코멘트 입력</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center"><strong>O</strong></td></tr>
        <tr><td>Issue 생성</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>Issue 연결</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">X</td></tr>
        <tr><td>첨부파일 추가 (Attachments 페이지 통해)</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>실행 항목 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>
    <aside className="guide-callout"><strong>모든 역할이 테스트를 직접 실행하고 코멘트를 남길 수 있습니다.</strong> Developer만 Jira Issue 생성·연결이 제한됩니다.</aside>

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
        <tr><td>Issue 생성 버튼이 안 보임</td><td>Developer 권한</td><td>Tester 이상 필요 (상태 변경·코멘트는 Developer도 가능)</td></tr>
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

export default TestExecution;
