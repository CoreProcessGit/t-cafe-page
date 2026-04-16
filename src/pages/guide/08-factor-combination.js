import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/08-factor/01.png';
import img02 from '../../assets/user_guide/08-factor/02.png';
import img03 from '../../assets/user_guide/08-factor/03.png';
import img04 from '../../assets/user_guide/08-factor/04.png';

const FactorCombination = () => (
  <article className="guide-article">
    <h1>08. Factor Combination</h1>
    <p className="guide-lead">
      <strong>Factor Combination</strong>은 T-CAFE만의 차별화 기능입니다. 여러 변수(Factor)의 조합을 자동으로 생성해 테스트 케이스를 대량 작성할 수 있습니다.
    </p>

    <hr />

    <h2>1. Factor Combination이란?</h2>
    <p>테스트해야 할 변수가 여러 개인 시나리오에서, <strong>모든 가능한 조합을 자동으로 만들어주는 기능</strong>입니다.</p>

    <h3>사용 사례</h3>
    <ul>
      <li><strong>Cross Browser 테스트</strong>: Chrome × Firefox × Safari × Edge 조합</li>
      <li><strong>다국어 테스트</strong>: 한국어 × 영어 × 일본어 × 중국어</li>
      <li><strong>권한 테스트</strong>: Admin × User × Guest 조합</li>
      <li><strong>OS × 디바이스</strong>: Windows × Mac × Linux × iOS × Android</li>
      <li><strong>결제 수단</strong>: 신용카드 × 계좌이체 × 가상계좌 × 페이팔</li>
    </ul>

    <h3>왜 자동화가 필요한가?</h3>
    <p>3개 변수가 각각 4개, 3개, 5개의 값을 가지면:</p>
    <ul>
      <li>수동 작성: 4 × 3 × 5 = <strong>60개의 TC</strong>를 일일이 작성해야 함</li>
      <li>Factor Combination: <strong>자동으로 60개 생성</strong> + 변경 시 한 번에 갱신</li>
    </ul>

    <hr />

    <h2>2. 기본 개념</h2>
    <table>
      <thead>
        <tr><th>용어</th><th>영문</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Factor</strong></td><td>Factor</td><td>변수 (예: Browser, OS, Language)</td></tr>
        <tr><td><strong>Value</strong></td><td>Value</td><td>변수의 값 (예: Chrome, Firefox, Safari)</td></tr>
        <tr><td><strong>Combination</strong></td><td>Combination</td><td>모든 Factor의 값 조합 (예: Chrome+Windows+Korean)</td></tr>
        <tr><td><strong>Constraint</strong></td><td>Constraint</td><td>조합 제약 (예: "Safari는 Windows에서 제외")</td></tr>
        <tr><td><strong>Factor Type</strong></td><td>Type</td><td>각 Factor별로 선택하는 조합 방식 (<strong>Full Combination</strong> 또는 <strong>Pairwise</strong>). Factor마다 다른 타입을 섞으면 자동으로 Mixed 방식으로 처리됩니다.</td></tr>
        <tr><td><strong>Simulated TC</strong></td><td>Simulated Test Case</td><td>생성될 TC의 미리보기</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>3. Combination Type (조합 알고리즘)</h2>
    <p>T-CAFE는 3가지 조합 알고리즘을 지원합니다.</p>

    <h3>3-1. Full Combination (전체 조합)</h3>
    <p>모든 가능한 조합을 만듭니다.</p>
    <p><strong>예시</strong>: Browser(3) × OS(2) × Language(2) = <strong>12개 조합</strong></p>
    <table>
      <thead>
        <tr><th>Browser</th><th>OS</th><th>Language</th></tr>
      </thead>
      <tbody>
        <tr><td>Chrome</td><td>Windows</td><td>Korean</td></tr>
        <tr><td>Chrome</td><td>Windows</td><td>English</td></tr>
        <tr><td>Chrome</td><td>Mac</td><td>Korean</td></tr>
        <tr><td>Chrome</td><td>Mac</td><td>English</td></tr>
        <tr><td>Firefox</td><td>Windows</td><td>Korean</td></tr>
        <tr><td>Firefox</td><td>Windows</td><td>English</td></tr>
        <tr><td>Firefox</td><td>Mac</td><td>Korean</td></tr>
        <tr><td>Firefox</td><td>Mac</td><td>English</td></tr>
        <tr><td>Safari</td><td>Windows</td><td>Korean</td></tr>
        <tr><td>Safari</td><td>Windows</td><td>English</td></tr>
        <tr><td>Safari</td><td>Mac</td><td>Korean</td></tr>
        <tr><td>Safari</td><td>Mac</td><td>English</td></tr>
      </tbody>
    </table>
    <p><strong>장점</strong>: 100% 커버리지<br /><strong>단점</strong>: 변수가 많으면 폭발적으로 증가</p>

    <h3>3-2. Pairwise Combination (페어와이즈)</h3>
    <aside className="guide-callout info">
      테스트 대상 Factor들 중 <strong>아무 2개를 골랐을 때</strong>, 그 두 Factor의 <strong>각 값들의 모든 조합(pair)이 최소 한 번 이상 등장</strong>하도록 테스트 케이스를 구성합니다.
    </aside>
    <p>즉 임의의 두 Factor만 떼서 봐도 그 두 Factor의 모든 값 쌍이 적어도 한 번은 함께 나타납니다. 3개 이상의 Factor가 동시에 만들어내는 특정 조합은 보장하지 않습니다.</p>

    <p>Pairwise는 모든 2-Factor 값 쌍이 포함되도록 <strong>자동으로 최적의 조합을 선택</strong>합니다.</p>

    <p><strong>예시</strong>: Browser(3) × OS(3) × Language(2) → Full은 18개, <strong>Pairwise는 약 9개</strong>로 축소</p>
    <p><strong>장점</strong>: TC 수가 크게 줄어듦 (변수가 많을수록 효과 큼)<br /><strong>단점</strong>: 3개 이상의 Factor가 동시에 만들어내는 특정 조합은 누락 가능</p>

    <p><strong>자동 fallback</strong>:</p>
    <ul>
      <li>Factor가 1개면 → 그 Factor의 값을 그대로 나열</li>
      <li>Factor가 2개면 → Full Combination과 동일 (Pairwise의 정의상 동치)</li>
      <li>Factor가 3개 이상이면 → Pairwise 자동 최적화 적용</li>
    </ul>

    <p><strong>생성 한도</strong> (모든 알고리즘 공통):</p>
    <ul>
      <li>한 번의 Factor Combination 시뮬레이션으로 생성 가능한 최대 테스트 케이스 수는 <strong>5000개</strong></li>
      <li>Full / Pairwise / Mixed 알고리즘 종류와 무관하게 동일하게 적용</li>
      <li>5000개를 초과하면 시뮬레이션 단계에서 경고가 표시되고 앞에서부터 5000개만 미리보기로 노출</li>
      <li>5000개에 근접할 정도면 Constraint를 추가하거나 Factor를 분할 권장</li>
    </ul>

    <p><strong>언제 쓰는가</strong>:</p>
    <ul>
      <li>회귀 테스트 등 시간이 부족할 때</li>
      <li>변수가 많은데 모든 조합을 다 돌리기 어려울 때</li>
      <li>실증 연구상 단일/페어 조합에서 발견되는 결함의 비중이 큼</li>
    </ul>

    <h3>3-3. Mixed Combination (자동 처리)</h3>
    <aside className="guide-callout info">
      Mixed는 사용자가 직접 선택하는 옵션이 아니라, Factor별로 서로 다른 타입을 지정했을 때 <strong>시뮬레이션 시 자동으로 적용되는 방식</strong>입니다.
    </aside>
    <p>여러 Factor 중 일부는 <strong>Full Combination</strong>, 일부는 <strong>Pairwise</strong>로 타입을 지정하면, T-CAFE는 Full 타입 Factor들의 모든 조합을 기준으로 Pairwise 타입 Factor의 값을 골고루 배분합니다.</p>
    <p><strong>예시</strong>: Browser / OS를 Full로, Language를 Pairwise로 지정 → Browser × OS 모든 조합이 유지되면서 Language 값이 순환 배분</p>

    <hr />

    <h2>4. Constraint (조합 제약)</h2>
    <p>현실에서는 모든 조합이 의미 있지 않습니다. <strong>Constraint</strong>로 불가능하거나 불필요한 조합을 제외할 수 있습니다.</p>

    <h3>Constraint 종류 (3가지)</h3>
    <table>
      <thead>
        <tr><th>UI 라벨</th><th>의미</th><th>사용 예시</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>If-Then</strong></td><td>특정 조건이 충족되면 다른 Factor가 특정 값이어야 함</td><td>"Browser=Safari일 때 OS는 Mac"</td></tr>
        <tr><td><strong>One-Way Exclude</strong></td><td>한 쪽 조건이 참일 때 특정 조합을 제외 (단방향)</td><td>"OS=Windows일 때 Browser=Safari 제외"</td></tr>
        <tr><td><strong>Two-Way Exclude</strong></td><td>지정한 두 값이 절대 함께 등장하지 못하도록 양방향으로 제외</td><td>"Browser=Safari와 OS=Windows 조합 제외"</td></tr>
      </tbody>
    </table>

    <h3>예시 — "Safari는 Windows에서 동작하지 않음"</h3>
    <ul>
      <li><strong>One-Way Exclude</strong>: OS=Windows ➜ Browser=Safari 제외</li>
      <li><strong>Two-Way Exclude</strong>: Browser=Safari 와 OS=Windows 를 함께 등장 불가로 지정</li>
    </ul>
    <p>→ 두 방식 모두 "Safari + Windows" 조합이 시뮬레이션 결과에서 제외됩니다.</p>

    <hr />

    <h2>5. Factor Combination 생성 절차</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>화면 구조 안내</h3>
    <p>Factor Combination 화면은 상단에 <strong>3개의 탭</strong>이 있으며 순서대로 작업을 진행합니다:</p>
    <ol>
      <li><strong>Simulation</strong> 탭 — Factor / Constraint 정의 및 시뮬레이션</li>
      <li><strong>Details</strong> 탭 — 모든 조합 TC에 공통 적용할 속성 입력 (Priority, Case Type, Owner 등)</li>
      <li><strong>Steps &amp; Test Data</strong> 탭 — 각 조합별로 수행할 스텝 매트릭스 정의</li>
    </ol>

    <h3>Step 1: 폴더 선택</h3>
    <ol>
      <li>Test Cases 페이지에서 Factor Combination을 만들 폴더 선택 (없으면 먼저 <strong>New Folder</strong>로 생성)</li>
    </ol>

    <h3>Step 2: Factor Combination 생성 시작</h3>
    <ol>
      <li>상단의 <strong>+ Create Test Case</strong> 버튼 클릭</li>
      <li>드롭다운 메뉴에서 <strong>Factor Combination</strong> 선택</li>
      <li>Factor Combination 작성 화면(Simulation 탭)이 열립니다</li>
    </ol>

    <ScreenshotSlot label="Factor Combination 시작 화면" src={img01} />

    <h3>Step 3: Factor 정의 (Simulation 탭)</h3>
    <ol>
      <li><strong>+ Add Factor</strong> 클릭</li>
      <li>Factor 이름 입력 (예: "Browser")</li>
      <li>Factor 타입 선택 — <strong>Full Combination</strong> 또는 <strong>Pairwise</strong></li>
      <li><strong>Values 추가</strong>: 각 값을 입력 (예: Chrome, Firefox, Safari)</li>
      <li>필요한 만큼 Factor 추가 반복</li>
    </ol>

    <ScreenshotSlot label="Factor 정의 화면" src={img02} />

    <h3>Step 4: Constraint 추가 (선택, Simulation 탭)</h3>
    <ol>
      <li><strong>+ Add Constraint</strong> 클릭</li>
      <li>Constraint Type 선택: <strong>If-Then</strong> / <strong>One-Way Exclude</strong> / <strong>Two-Way Exclude</strong></li>
      <li>관련 Factor와 값 선택</li>
      <li><strong>Add Constraint</strong> 버튼으로 저장</li>
    </ol>

    <h3>Step 5: 시뮬레이션 (Simulation 탭)</h3>
    <ol>
      <li><strong>Simulate</strong> 버튼 클릭</li>
      <li>생성될 조합 목록이 미리보기로 표시됨 (최대 5,000개까지, 초과 시 경고)</li>
      <li>결과가 마음에 들지 않으면 Factor 또는 Constraint 조정 후 다시 Simulate</li>
    </ol>

    <ScreenshotSlot label="Simulation 결과" src={img03} />

    <h3>Step 6: 공통 속성 입력 (Details 탭)</h3>
    <ol>
      <li>상단의 <strong>Details</strong> 탭 클릭</li>
      <li>모든 조합 TC에 공통 적용할 항목 입력 (Description, Priority, Owner, Components, Labels, Case Type, UDF 등)</li>
      <li><strong>Apply</strong> 버튼 클릭 — 공통 정보가 저장되고 이후 TC 생성에 반영됩니다</li>
    </ol>

    <aside className="guide-callout info">
      Details 정보를 저장하지 않으면 TC 생성 시 "Please save Details information first" 경고가 표시되어 진행할 수 없습니다.
    </aside>

    <h3>Step 7: 스텝 매트릭스 정의 (Steps &amp; Test Data 탭, 선택)</h3>
    <ol>
      <li>상단의 <strong>Steps &amp; Test Data</strong> 탭 클릭</li>
      <li>테스트 스텝(행)과 각 조합(열)로 이루어진 매트릭스에서 조합별 적용 여부와 Test Data 입력</li>
      <li>자세한 사용법은 아래 §8 Steps Matrix 참고</li>
    </ol>

    <h3>Step 8: TC 생성</h3>
    <ol>
      <li>화면 우상단의 <strong>Create Test Case</strong> 버튼 클릭</li>
      <li>시뮬레이션된 각 조합에 대해 TC가 자동 생성됩니다</li>
      <li>TC 이름은 자동으로 "<code>폴더명-Factor값1-Factor값2-…</code>" 형식 부여 (예: "Cross Browser-Chrome-Desktop-Login")</li>
      <li>생성된 TC는 목록에서 <strong>F</strong> 배지(Factor 타입)로 표시됨</li>
    </ol>

    <hr />

    <h2>6. 생성된 TC의 특징</h2>

    <h3>자동 부여 항목</h3>
    <ul>
      <li><strong>이름</strong>: 폴더명 + 각 Factor 값을 조합한 형식</li>
      <li><strong>TC 키</strong>: 자동 부여 (예: PROJ-15, PROJ-16...)</li>
      <li><strong>Factor Values</strong>: 어떤 조합인지 메타데이터로 저장</li>
      <li><strong>Factor Signature</strong>: 조합을 유일하게 식별하는 키</li>
      <li><strong>테스트 스텝</strong>: 기본 템플릿 + 각 Factor 값이 자동 삽입됨</li>
    </ul>

    <h3>공통 정보 (Assignment Statistics)</h3>
    <p>모든 조합 TC에 동일하게 적용되는 정보:</p>
    <ul>
      <li>우선순위 (Priority)</li>
      <li>케이스 타입 (Case Type)</li>
      <li>컴포넌트 (Components)</li>
      <li>라벨 (Labels)</li>
      <li>소유자 (Owner)</li>
      <li>UDF (User Defined Fields)</li>
    </ul>
    <p>이 정보들은 Factor Combination 생성 시 한 번만 입력하면 모든 조합 TC에 자동 적용됩니다.</p>

    <hr />

    <h2>7. Factor TC / Factor Combination 수정</h2>
    <aside className="guide-callout"><strong>권한 필요</strong>: Admin 또는 Team Admin</aside>

    <h3>개별 Factor TC 속성 수정</h3>
    <p>생성된 각 Factor TC는 Single TC처럼 개별적으로 열어서 속성을 수정할 수 있습니다.</p>
    <ol>
      <li>TC 목록에서 편집할 Factor TC의 Key 또는 이름 클릭</li>
      <li>편집 페이지에서 이름 · Description · Precondition · 테스트 스텝 · UDF 등을 직접 수정</li>
      <li>저장</li>
    </ol>
    <p>편집 페이지는 Single TC의 편집 화면과 동일한 UI를 사용합니다. Factor 메타데이터(어떤 조합인지)는 읽기 전용으로 표시됩니다.</p>

    <h3>Factor Combination 구조(Factor/Value/Constraint) 재편집</h3>
    <p>Factor Combination의 <strong>구조 자체(Factor 추가·삭제, Value 변경, Constraint 수정)</strong>를 바꾸는 경우 해당 폴더의 Factor Combination 작업 화면을 다시 열어 Simulation 탭에서 조정합니다. Details/Steps &amp; Test Data 탭도 순차적으로 갱신하여 <strong>Apply</strong> / <strong>Create Test Case</strong>로 재생성합니다.</p>

    <aside className="guide-callout info">
      Factor Combination 구조를 크게 변경하면 이미 생성된 TC가 예상과 달라질 수 있으므로, 기존 TC 삭제 후 새로 생성하는 것을 권장합니다. 실행 이력이 있는 TP에 추가된 TC는 스냅샷으로 복사되어 있어 구조 변경의 영향을 받지 않습니다.
    </aside>

    <hr />

    <h2>8. Steps Matrix (스텝 매트릭스)</h2>
    <p>Factor Combination에서는 <strong>각 조합별로 다른 스텝</strong>을 정의할 수 있습니다.</p>

    <h3>Steps Matrix 화면</h3>
    <ul>
      <li>행: 테스트 스텝 (Step 1, 2, 3...)</li>
      <li>열: 각 조합 TC</li>
    </ul>

    <h3>사용법</h3>
    <ol>
      <li>공통 스텝은 모든 조합에서 체크</li>
      <li>특정 조합에만 적용되는 스텝은 해당 열만 체크</li>
      <li>예: "Mac에서만 추가 권한 확인" 스텝은 Mac 조합에만 체크</li>
    </ol>

    <ScreenshotSlot label="Steps Matrix" src={img04} />

    <hr />

    <h2>9. 실제 예시 — Cross Browser 테스트</h2>

    <h3>시나리오</h3>
    <p>웹 애플리케이션의 로그인 기능을 다양한 환경에서 테스트</p>

    <h3>Factor 정의</h3>
    <table>
      <thead>
        <tr><th>Factor</th><th>Values</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Browser</strong></td><td>Chrome, Firefox, Safari</td></tr>
        <tr><td><strong>Device</strong></td><td>Desktop, Mobile</td></tr>
        <tr><td><strong>Feature</strong></td><td>Login</td></tr>
      </tbody>
    </table>

    <h3>Constraint</h3>
    <p>없음 (모든 조합 의미 있음)</p>

    <h3>Simulation 결과</h3>
    <p>3 × 2 × 1 = <strong>6개 조합</strong></p>
    <table>
      <thead>
        <tr><th>#</th><th>Browser</th><th>Device</th><th>Feature</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Chrome</td><td>Desktop</td><td>Login</td></tr>
        <tr><td>2</td><td>Chrome</td><td>Mobile</td><td>Login</td></tr>
        <tr><td>3</td><td>Firefox</td><td>Desktop</td><td>Login</td></tr>
        <tr><td>4</td><td>Firefox</td><td>Mobile</td><td>Login</td></tr>
        <tr><td>5</td><td>Safari</td><td>Desktop</td><td>Login</td></tr>
        <tr><td>6</td><td>Safari</td><td>Mobile</td><td>Login</td></tr>
      </tbody>
    </table>

    <h3>자동 생성된 TC 이름</h3>
    <ul>
      <li>Cross Browser-Chrome-Desktop-Login</li>
      <li>Cross Browser-Chrome-Mobile-Login</li>
      <li>Cross Browser-Firefox-Desktop-Login</li>
      <li>Cross Browser-Firefox-Mobile-Login</li>
      <li>Cross Browser-Safari-Desktop-Login</li>
      <li>Cross Browser-Safari-Mobile-Login</li>
    </ul>

    <h3>공통 스텝</h3>
    <ol>
      <li>해당 환경에서 애플리케이션 열기</li>
      <li>로그인 기능 테스트</li>
      <li>UI 렌더링 확인</li>
    </ol>

    <p>각 조합은 같은 스텝을 사용하지만, <strong>테스트 데이터는 환경별로 다르게</strong> 표시됩니다.</p>

    <hr />

    <h2>10. 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>명확한 Factor 이름</strong>: "Browser", "OS"처럼 자체 설명적</li>
      <li><strong>현실적인 Values</strong>: 실제 지원하는 항목만 (Safari를 Windows에 넣지 말기)</li>
      <li><strong>Pairwise를 적극 활용</strong>: 변수가 4개 이상이면 Pairwise 권장</li>
      <li><strong>Constraint 적극 사용</strong>: 불가능한 조합 미리 제거</li>
      <li><strong>시뮬레이션 후 생성</strong>: 무작정 생성하지 말고 미리보기 확인</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>너무 많은 Factor (10개 이상은 관리 불가)</li>
      <li>너무 많은 Values per Factor (각 Factor당 5~7개 권장)</li>
      <li>Constraint 없는 비현실적 조합 양산</li>
      <li>Steps Matrix를 무시한 단조로운 스텝</li>
    </ul>

    <hr />

    <h2>11. Factor TC와 일반 TC의 차이</h2>
    <table>
      <thead>
        <tr><th>항목</th><th>Single TC</th><th>Factor TC</th></tr>
      </thead>
      <tbody>
        <tr><td>생성 방식</td><td>수동 입력</td><td>Factor Combination 시뮬레이션으로 일괄 자동 생성</td></tr>
        <tr><td>TC 키</td><td>자동 부여</td><td>자동 부여</td></tr>
        <tr><td>이름</td><td>사용자 입력</td><td>폴더명 + 각 Factor 값을 "-"로 연결한 형식 자동 부여</td></tr>
        <tr><td>수정 가능 항목</td><td>모든 일반 속성</td><td>이름·Description·스텝·UDF 등 일반 속성 수정 가능. Factor 메타데이터(조합 값)는 읽기 전용</td></tr>
        <tr><td>폴더 이동</td><td>자유롭게 이동</td><td>개별 TC 단위로 자유 이동 (folder_id만 변경). Factor Combination 정의는 원래 폴더에 남음</td></tr>
        <tr><td>목록 표시</td><td><strong>S</strong> 배지</td><td><strong>F</strong> 배지</td></tr>
        <tr><td>삭제</td><td>개별 삭제</td><td>개별 삭제 가능. 원본 Factor Combination 정의(factor_combinations 레코드)는 폴더가 삭제되기 전까지 유지</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>12. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>+ Create Test Case 드롭다운에 Factor Combination이 안 보임</td><td>권한 없음 (canEditTC 필요)</td><td>Admin/Team Admin 권한 확인</td></tr>
        <tr><td>Simulation 결과가 너무 많음 / 5,000개 초과</td><td>Factor 수·값이 지나치게 많거나 Constraint 부족</td><td>Pairwise로 전환 또는 Constraint 추가, Factor 분할</td></tr>
        <tr><td>생성 후 일부 조합이 누락됨</td><td>Constraint가 과하게 제약</td><td>Constraint 재검토</td></tr>
        <tr><td>"Please save Details information first" 경고</td><td>Details 탭의 Apply 버튼을 누르지 않음</td><td>Details 탭 → 필수 항목 입력 → <strong>Apply</strong> 클릭 후 재시도</td></tr>
        <tr><td>Factor 이름 중복 에러</td><td>같은 이름의 Factor 두 개</td><td>Factor 이름 변경</td></tr>
        <tr><td>한글 Factor가 깨짐</td><td>인코딩 문제</td><td>UTF-8 확인</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>13. 통계 — 왜 Pairwise가 효과적인가?</h2>
    <p>연구에 따르면:</p>
    <ul>
      <li><strong>단일 변수</strong>에서 발생하는 버그: 약 35%</li>
      <li><strong>두 변수 조합</strong>에서 발생하는 버그: 약 40%</li>
      <li><strong>세 변수 조합</strong>에서 발생하는 버그: 약 15%</li>
      <li><strong>네 변수 이상</strong>: 약 10%</li>
    </ul>
    <p>→ <strong>Pairwise는 약 75%의 버그를 발견</strong>할 수 있고, TC 수는 Full Combination 대비 50~80% 감소</p>
    <p>(출처: NIST의 결합형 테스트(Combinatorial Testing) 연구 및 여러 산업 결함 데이터 분석 — NIST SP 500-267 등 참조)</p>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">05. 테스트 케이스 기본 사용법</Link></li>
      <li><Link to="/support/guide/test-plans">10. 테스트 플랜 관리</Link> — 생성된 Factor TC를 TP에 추가하기</li>
      <li><Link to="/support/guide/configuration">13. Configuration</Link> — Components, Case Types 미리 설정</li>
    </ul>
  </article>
);

export default FactorCombination;
