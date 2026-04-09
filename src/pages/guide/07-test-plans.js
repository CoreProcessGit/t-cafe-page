import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const TestPlans = () => (
  <article className="guide-article">
    <h1>07. 테스트 플랜 관리</h1>
    <p className="guide-lead">
      테스트 플랜(Test Plan, 이하 TP)은 특정 시점, 특정 목적으로 실행할 테스트 케이스들을 묶은 단위입니다. 스프린트, 릴리스, 회귀 테스트 등 다양한 용도로 사용합니다.
    </p>

    <hr />

    <h2>1. 테스트 플랜이란?</h2>
    <p><strong>TP는 "이번에 실행할 TC들의 묶음"</strong> 입니다.</p>

    <h3>TC vs TP</h3>
    <table>
      <thead>
        <tr><th>구분</th><th>Test Case (TC)</th><th>Test Plan (TP)</th></tr>
      </thead>
      <tbody>
        <tr><td>역할</td><td>무엇을 테스트할지 정의</td><td>언제, 어떻게 실행할지 묶음</td></tr>
        <tr><td>재사용</td><td>한 번 만들고 여러 TP에서 재사용</td><td>일회성 (스프린트마다 새로 생성)</td></tr>
        <tr><td>실행 결과</td><td>TC 자체에는 결과 없음</td><td>TP 안의 TC마다 Pass/Fail 기록</td></tr>
        <tr><td>라이프사이클</td><td>영구적</td><td>단기간 (스프린트, 릴리스 등)</td></tr>
      </tbody>
    </table>

    <h3>TP 사용 사례</h3>
    <ul>
      <li><strong>Sprint 1 통합 테스트</strong> — 스프린트 1에 새로 추가된 기능 검증</li>
      <li><strong>v1.5 릴리스 회귀 테스트</strong> — 1.5 릴리스 전 핵심 기능 회귀</li>
      <li><strong>월간 보안 점검</strong> — 매월 보안 관련 TC 일괄 실행</li>
      <li><strong>고객사 A 도입 검증</strong> — 특정 고객 환경 검증</li>
    </ul>

    <hr />

    <h2>2. TP의 주요 항목</h2>
    <table>
      <thead>
        <tr><th>항목</th><th>영문</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>이름</strong></td><td>Name</td><td>TP의 제목 (필수)</td></tr>
        <tr><td><strong>설명</strong></td><td>Description</td><td>TP 목적과 범위</td></tr>
        <tr><td><strong>소유자</strong></td><td>Owner</td><td>TP 책임자</td></tr>
        <tr><td><strong>시작일</strong></td><td>Start Date</td><td>테스트 시작 예정일</td></tr>
        <tr><td><strong>종료일</strong></td><td>End Date</td><td>테스트 종료 예정일</td></tr>
        <tr><td><strong>상태</strong></td><td>Status</td><td>Draft / Open / Completed (사용자 정의 상태 추가 가능)</td></tr>
        <tr><td><strong>TC 목록</strong></td><td>Test Cases</td><td>실행할 TC들</td></tr>
        <tr><td><strong>폴더 구조</strong></td><td>Folders</td><td>TP 내부에서 TC를 폴더로 정리</td></tr>
        <tr><td><strong>실행 통계</strong></td><td>Execution Status</td><td>Pass/Fail/Block/Skip/Not Yet 카운트</td></tr>
        <tr><td><strong>진행률</strong></td><td>Progress</td><td>0~100%</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>3. TP 조회</h2>

    <h3>진입 경로</h3>
    <p>상단 탭 → <strong>Test Plans</strong></p>

    <h3>화면 구성</h3>
    <ul>
      <li><strong>상단</strong>: TP 목록 (이름, 상태, 진행률, 시작/종료일)</li>
      <li><strong>각 TP 클릭 시</strong>: TP 상세 페이지로 이동</li>
      <li><strong>상세 페이지</strong>: TP 안의 TC 목록 + 실행 결과</li>
    </ul>

    <ScreenshotSlot label="Test Plans 메인 화면" />

    <h3>필터</h3>
    <ul>
      <li>상태별 (기본: Draft / Open / Completed, 사용자 정의 상태 포함)</li>
      <li>소유자별</li>
      <li>날짜 범위</li>
    </ul>

    <h3>정렬</h3>
    <ul>
      <li>이름 / 시작일 / 종료일 / 진행률</li>
    </ul>

    <hr />

    <h2>4. TP 생성</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>Test Plans 페이지에서 <strong>+ Create Test Plan</strong> 클릭</li>
      <li>필수 항목 입력:
        <ul>
          <li>이름 (필수)</li>
          <li>설명</li>
          <li>시작일 / 종료일</li>
          <li>소유자 (기본값: 본인)</li>
          <li>상태 (기본값: Draft)</li>
        </ul>
      </li>
      <li><strong>Save</strong></li>
    </ol>

    <ScreenshotSlot label="TP 생성 다이얼로그" />

    <h3>자동 부여 항목</h3>
    <ul>
      <li><strong>TP 키</strong>: <code>{'<프로젝트키>-TP-<순번>'}</code> (예: <code>TCAFE-TP-1</code>)</li>
      <li><strong>생성일</strong>: 자동</li>
      <li><strong>최초 통계</strong>: notYet 100%</li>
    </ul>

    <hr />

    <h2>5. TP에 TC 추가</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>TP 상세 페이지 진입</li>
      <li><strong>+ Add Test Cases</strong> 버튼 클릭</li>
      <li>TC 선택 화면에서 추가할 TC 체크</li>
      <li><strong>Add</strong> 클릭</li>
    </ol>

    <h3>TC 선택 방법</h3>
    <ul>
      <li><strong>폴더 트리에서 선택</strong>: 폴더 단위 선택 (한 번에 여러 개)</li>
      <li><strong>개별 선택</strong>: 체크박스로 하나씩</li>
      <li><strong>검색으로 선택</strong>: 검색 후 결과에서 선택</li>
      <li><strong>필터로 선택</strong>: 우선순위, 컴포넌트 등으로 필터링</li>
    </ul>

    <ScreenshotSlot label="TC 추가 화면" />

    <h3>추가 시 자동 처리</h3>
    <ul>
      <li>각 TC가 <strong>TPTC</strong> (Test Plan Test Case) 단위로 변환됨</li>
      <li>TPTC 키 자동 부여 (예: <code>TPTC-1</code>, <code>TPTC-2</code>)</li>
      <li>각 TPTC의 초기 실행 상태: <code>notYet</code></li>
      <li>TC의 현재 상태(이름, 스텝 등)가 <strong>스냅샷</strong>으로 저장됨</li>
    </ul>

    <h3>스냅샷이란?</h3>
    <ul>
      <li>TP에 추가된 시점의 TC 상태를 그대로 복사</li>
      <li>TC 원본이 나중에 수정되어도 TP의 TPTC는 변경되지 않음</li>
      <li>실행 시점의 데이터가 보존됨 (감사 추적용)</li>
      <li>원본 TC와 다시 동기화하려면 수동으로 다시 추가해야 함</li>
    </ul>

    <hr />

    <h2>6. TP 폴더 구조</h2>
    <p>TP 내부에서도 폴더로 TC를 정리할 수 있습니다 (TP 폴더는 일반 TC 폴더와 별개).</p>

    <h3>자동 폴더 생성</h3>
    <ul>
      <li>TC를 추가할 때 원본 TC의 폴더 이름과 동일한 TP 폴더가 자동 생성됨</li>
      <li>예: TC가 "Login" 폴더에 있었다면 → TP 안에도 "Login" 폴더 생성</li>
    </ul>

    <h3>수동 폴더 관리</h3>
    <ol>
      <li>TP 상세 페이지에서 <strong>+ Add Folder</strong> 클릭</li>
      <li>폴더 이름 입력</li>
      <li>TPTC를 폴더로 드래그 앤 드롭</li>
    </ol>

    <ScreenshotSlot label="TP 폴더 구조" />

    <hr />

    <h2>7. TP에서 TC 제거</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>TP 상세 페이지에서 제거할 TPTC 선택</li>
      <li><strong>Remove</strong> 버튼 클릭</li>
      <li>확인 다이얼로그에서 <strong>Confirm</strong></li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>TPTC를 제거해도 <strong>원본 TC는 삭제되지 않습니다</strong></li>
      <li>TPTC만 제거되며 다시 추가 가능합니다</li>
      <li>실행 결과도 함께 사라집니다</li>
    </ul>

    <hr />

    <h2>8. TP 복제 (Clone)</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>사용 사례</h3>
    <ul>
      <li>매주 동일한 회귀 테스트를 새 TP로 만들 때</li>
      <li>이전 스프린트의 TP를 기반으로 다음 스프린트 만들기</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>복제할 TP 선택 → <strong>Clone</strong> 버튼</li>
      <li>새 TP 이름 입력</li>
      <li>시작일 / 종료일 변경</li>
      <li><strong>Confirm</strong></li>
    </ol>

    <h3>복제되는 항목</h3>
    <ul>
      <li>모든 TPTC (실행 결과는 초기화됨)</li>
      <li>TP 폴더 구조</li>
      <li>메타데이터 (설명 등)</li>
    </ul>

    <h3>복제되지 않는 항목</h3>
    <ul>
      <li>실행 상태 (모두 <code>notYet</code>으로 초기화)</li>
      <li>코멘트</li>
      <li>연결된 Issue</li>
    </ul>

    <hr />

    <h2>9. TP 상태 (Status)</h2>
    <p>TP는 라이프사이클에 따라 상태가 변경됩니다.</p>

    <h3>기본 상태 (3종)</h3>
    <ul>
      <li><strong>Draft</strong> (초안) — 작성 중, 아직 실행 시작 안 함 (기본값)</li>
      <li><strong>Open</strong> (열림) — 실행 가능 상태</li>
      <li><strong>Completed</strong> (완료) — 모든 테스트 완료</li>
    </ul>

    <aside className="guide-callout">필요 시 "In Progress", "Closed" 등 사용자 정의 상태를 직접 추가할 수 있습니다 (아래 사용자 정의 상태 참고).</aside>

    <h3>사용자 정의 상태</h3>
    <p>Configuration → Plan Status에서 추가/수정 가능 (Admin / Team Admin)</p>
    <ul>
      <li>자세한 내용은 <Link to="/support/guide/configuration">10. Configuration</Link> 참고</li>
    </ul>

    <h3>상태 변경</h3>
    <ol>
      <li>TP 상세 페이지의 상태 드롭다운 클릭</li>
      <li>새 상태 선택</li>
      <li>자동 저장</li>
    </ol>

    <hr />

    <h2>10. TP 진행률 (Progress)</h2>
    <p>TP의 진행률은 자동으로 계산됩니다.</p>

    <h3>계산 공식</h3>
    <pre><code>{`진행률 = (Pass + Fail + Block + Skip) / 전체 TPTC × 100`}</code></pre>
    <p><code>notYet</code> 상태인 TPTC는 미진행으로 간주됩니다.</p>

    <h3>화면 표시</h3>
    <ul>
      <li>TP 목록에 진행률 막대 표시</li>
      <li>TP 상세 페이지 상단에 큰 진행률 게이지</li>
    </ul>

    <hr />

    <h2>11. TP 삭제</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>절차</h3>
    <ol>
      <li>TP 선택 → <strong>Delete</strong> 버튼</li>
      <li>확인 다이얼로그에서 <strong>Confirm</strong></li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>TP 삭제 시 <strong>모든 TPTC와 실행 결과가 함께 삭제됩니다</strong></li>
      <li>원본 TC는 영향받지 않습니다</li>
      <li>삭제된 데이터는 <strong>복구할 수 없습니다</strong></li>
    </ul>

    <h3>권장 — 삭제 대신 상태 변경</h3>
    <ul>
      <li>보존할 가치가 있다면 <strong>Closed</strong> 상태로 변경하는 것이 더 안전</li>
      <li>나중에 감사나 회귀 분석 시 참고 가능</li>
    </ul>

    <hr />

    <h2>12. 일반적인 TP 워크플로우</h2>

    <h3>시나리오: 스프린트 통합 테스트</h3>
    <pre><code>{`1. 스프린트 시작 (월요일)
 ├─ Admin이 "Sprint 1 - Integration Test" TP 생성
 ├─ 시작일: 월요일, 종료일: 금요일
 └─ 상태: Draft

2. TC 추가 (월요일~화요일)
 ├─ 새로 작성된 TC들을 TP에 추가
 ├─ 회귀 테스트용 TC도 추가
 └─ 폴더 구조로 정리

3. 실행 시작 (화요일)
 ├─ 상태를 Open → In Progress로 변경
 ├─ Tester들에게 알림
 └─ 실행 시작

4. 실행 중 (수요일~목요일)
 ├─ Tester들이 각 TPTC를 실행
 ├─ Pass/Fail/Block/Skip 기록
 ├─ Fail 시 Jira Issue 생성
 └─ 진행률 모니터링

5. 완료 (금요일)
 ├─ 상태를 Completed로 변경
 ├─ 리포트 생성 후 공유
 └─ 미해결 Issue 추적`}</code></pre>

    <hr />

    <h2>13. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>TP 생성 버튼이 안 보임</td><td>권한 없음</td><td>Admin/Team Admin 필요</td></tr>
        <tr><td>TC를 추가했는데 안 보임</td><td>폴더가 닫혀 있음</td><td>폴더 펼치기</td></tr>
        <tr><td>진행률이 갱신 안 됨</td><td>페이지 캐시</td><td>새로고침</td></tr>
        <tr><td>TPTC 키가 중복</td><td>시스템 오류</td><td>새로고침 후 재시도</td></tr>
        <tr><td>원본 TC를 수정했는데 TPTC가 안 바뀜</td><td>스냅샷 동작</td><td>TPTC 제거 후 재추가</td></tr>
        <tr><td>폴더 구조가 깨짐</td><td>드래그 도중 취소</td><td>폴더 다시 정리</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>14. 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>명확한 이름</strong>: "Sprint 1", "v2.5 Regression"처럼 식별 가능</li>
      <li><strong>시작/종료일 설정</strong>: 일정 추적에 필수</li>
      <li><strong>소규모 TP</strong>: 50~200개 TPTC가 관리하기 좋음</li>
      <li><strong>폴더로 정리</strong>: 큰 TP는 폴더로 그룹화</li>
      <li><strong>상태 관리</strong>: Draft → Open → Completed 흐름 유지 (또는 사용자 정의 상태 활용)</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>한 TP에 1000+ TC 몰아넣기</li>
      <li>이름 없는 TP ("Test Plan 1")</li>
      <li>끝나도 Closed 처리 안 하기</li>
      <li>TPTC 중복 추가 (같은 TC를 여러 번)</li>
      <li>TP를 영구 보관용으로 쓰기 (TP는 일회성)</li>
    </ul>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-execution">08. 테스트 실행</Link> — TPTC 실행과 결과 기록</li>
      <li><Link to="/support/guide/test-reports">09. 테스트 리포트</Link> — TP 결과 리포트 생성</li>
      <li><Link to="/support/guide/configuration">10. Configuration</Link> → Plan Status 사용자 정의</li>
    </ul>
  </article>
);

export default TestPlans;
