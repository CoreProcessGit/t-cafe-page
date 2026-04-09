import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const Board = () => (
  <article className="guide-article">
    <h1>13. 게시판 (Board)</h1>
    <p className="guide-lead">
      게시판은 프로젝트 팀원들에게 공지사항이나 정보를 공유하는 공간입니다. T-CAFE의 Overview 페이지에서 접근할 수 있습니다.
    </p>

    <hr />

    <h2>1. 게시판이란?</h2>
    <p>테스트 관리와 관련된 공지, 안내, 이슈를 한곳에 모아 팀에 전파하는 게시판입니다.</p>

    <h3>사용 사례</h3>
    <ul>
      <li><strong>공지</strong>: "다음 주 월요일부터 새 테스트 환경 사용"</li>
      <li><strong>릴리스 노트</strong>: "v1.5 릴리스 — 새로 추가된 기능 안내"</li>
      <li><strong>테스트 환경 변경</strong>: "스테이징 서버 점검 안내"</li>
      <li><strong>신규 멤버 환영</strong>: "QA팀 김OO 사원이 합류했습니다"</li>
      <li><strong>베스트 프랙티스 공유</strong>: "Factor Combination 활용 팁"</li>
    </ul>

    <hr />

    <h2>2. 진입 경로</h2>
    <p>상단 탭 → <strong>Overview</strong> → 게시판 섹션</p>
    <ScreenshotSlot label="Overview 안의 게시판 영역" />

    <hr />

    <h2>3. 권한</h2>
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
        <tr><td>게시글 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td><strong>게시글 작성</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>게시글 수정</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>게시글 삭제</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>
    <aside className="guide-callout"><strong>게시글 작성/수정/삭제는 Admin 전용</strong>입니다. 일반 사용자는 조회만 가능합니다.</aside>

    <hr />

    <h2>4. 게시글 유형</h2>
    <p>T-CAFE 게시판은 다음 카테고리를 제공합니다:</p>
    <table>
      <thead>
        <tr><th>카테고리</th><th>영문</th><th>용도</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>공지</strong></td><td>Notice</td><td>중요한 공지사항 (상단 고정)</td></tr>
        <tr><td><strong>일반</strong></td><td>General</td><td>일반 게시글</td></tr>
      </tbody>
    </table>

    <h3>공지(Notice)의 특성</h3>
    <ul>
      <li>게시판 상단에 고정 표시</li>
      <li>"공지" 라벨/뱃지 표시</li>
      <li>일반 게시글보다 시각적으로 강조됨</li>
    </ul>

    <hr />

    <h2>5. 게시글 조회</h2>

    <h3>화면 구성</h3>
    <ul>
      <li><strong>상단</strong>: 공지(Notice) 게시글 (있다면)</li>
      <li><strong>하단</strong>: 일반 게시글 (최신순)</li>
      <li>각 게시글: 제목, 작성자, 작성일, 조회수</li>
    </ul>

    <h3>페이지네이션</h3>
    <ul>
      <li>한 페이지에 5~10개씩 표시</li>
      <li>페이지 번호로 이동</li>
    </ul>

    <ScreenshotSlot label="게시글 목록" />

    <h3>게시글 상세 조회</h3>
    <ol>
      <li>게시글 제목 클릭</li>
      <li>상세 페이지가 열림</li>
      <li>본문, 첨부파일, 조회수 등 표시</li>
    </ol>

    <hr />

    <h2>6. 게시글 작성 (Admin 전용)</h2>

    <h3>절차</h3>
    <ol>
      <li>게시판 상단의 <strong>+ Write Post</strong> 또는 <strong>글쓰기</strong> 버튼</li>
      <li>작성 폼이 열림</li>
      <li>입력 항목:
        <ul>
          <li><strong>제목</strong> (필수)</li>
          <li><strong>카테고리</strong> — 공지(Notice) 또는 일반(General)</li>
          <li><strong>본문</strong> — 리치 텍스트 에디터</li>
          <li><strong>첨부파일</strong> (선택)</li>
        </ul>
      </li>
      <li><strong>Submit</strong> 또는 <strong>Publish</strong></li>
    </ol>

    <ScreenshotSlot label="게시글 작성 폼" />

    <h3>본문 에디터 기능</h3>
    <ul>
      <li><strong>굵게</strong>, <em>기울임</em>, 밑줄</li>
      <li>글머리 기호 / 번호 목록</li>
      <li>링크</li>
      <li>이미지 삽입 (인라인)</li>
      <li>코드 블록</li>
      <li>인용구</li>
      <li>색상 / 배경색</li>
    </ul>

    <h3>XSS 방지</h3>
    <ul>
      <li>T-CAFE는 게시글 본문을 자동으로 안전하게 sanitize 처리하여 XSS를 방지합니다</li>
      <li>악성 스크립트 삽입 시도가 자동 차단됩니다</li>
    </ul>

    <hr />

    <h2>7. 게시글 수정 (Admin 전용)</h2>

    <h3>절차</h3>
    <ol>
      <li>수정할 게시글 상세 페이지</li>
      <li><strong>Edit</strong> 버튼 클릭</li>
      <li>항목 수정</li>
      <li><strong>Save</strong></li>
    </ol>

    <h3>수정 이력</h3>
    <ul>
      <li>마지막 수정자와 수정일이 자동 기록됨</li>
    </ul>

    <hr />

    <h2>8. 게시글 삭제 (Admin 전용)</h2>

    <h3>절차</h3>
    <ol>
      <li>삭제할 게시글 상세 페이지</li>
      <li><strong>Delete</strong> 버튼 클릭</li>
      <li>확인 다이얼로그 → <strong>Confirm</strong></li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>삭제된 게시글은 <strong>복구할 수 없습니다</strong></li>
      <li>첨부파일도 함께 삭제됩니다</li>
    </ul>

    <hr />

    <h2>9. 조회수 (Views)</h2>
    <p>각 게시글은 자동으로 조회수가 카운트됩니다.</p>

    <h3>카운트 규칙</h3>
    <ul>
      <li>같은 사용자가 여러 번 봐도 1회로 카운트 (세션 단위)</li>
      <li>작성자 본인의 조회는 카운트 안 함 (선택적)</li>
    </ul>

    <h3>표시 위치</h3>
    <ul>
      <li>게시글 목록의 우측</li>
      <li>상세 페이지 상단</li>
    </ul>

    <hr />

    <h2>10. 게시판 베스트 프랙티스</h2>

    <h3>Admin 가이드라인 (게시글 작성)</h3>

    <h4>DO</h4>
    <ul>
      <li><strong>명확한 제목</strong>: 무엇에 관한 글인지 한 줄로 파악 가능</li>
      <li><strong>공지는 신중하게</strong>: 정말 중요한 사항만 공지로</li>
      <li><strong>간결하게</strong>: 너무 긴 글은 읽지 않음</li>
      <li><strong>첨부파일 활용</strong>: 자세한 내용은 PDF 등으로</li>
      <li><strong>카테고리 일관성</strong>: 같은 종류의 글은 같은 카테고리</li>
    </ul>

    <h4>DON'T</h4>
    <ul>
      <li>모든 글을 공지(Notice)로 표시</li>
      <li>의미 없는 제목 ("공지", "안내")</li>
      <li>같은 내용을 여러 번 게시</li>
      <li>개인적인 잡담 (전문적인 도구 신뢰도 ↓)</li>
    </ul>

    <h3>일반 사용자 가이드라인 (게시글 조회)</h3>
    <ul>
      <li>정기적으로 게시판 확인 (주 1회 권장)</li>
      <li>공지(Notice)는 반드시 확인</li>
      <li>중요한 안내는 캡처/저장</li>
    </ul>

    <hr />

    <h2>11. 게시판 활용 예시</h2>

    <h3>예시 1: 신규 환경 안내</h3>
    <pre><code>{`[제목] 새 테스트 환경 사용 안내 (2026-04-15부터)
[카테고리] 공지

안녕하세요. QA 팀입니다.

오는 4월 15일(월)부터 새 테스트 환경을 사용합니다.

1. 새 환경 정보
 - URL: https://staging-v2.example.com
 - DB: 새 인스턴스 (테스트 데이터 초기화됨)

2. 기존 환경
 - 4월 14일까지 사용 가능
 - 4월 15일부터 종료

3. 변경 사항
 - 응답 속도 30% 개선
 - 새 결제 모듈 적용

문의: contact@coreprocess.co.kr`}</code></pre>

    <h3>예시 2: 베스트 프랙티스 공유</h3>
    <pre><code>{`[제목] Factor Combination 효율적으로 활용하기
[카테고리] 일반

QA 팀에서 정리한 Factor Combination 활용 팁입니다.

1. 변수가 4개 이상이면 Pairwise 권장
2. Constraint를 적극 사용해 불가능한 조합 제거
3. ...

[첨부파일: Factor Combination Best Practices.pdf]`}</code></pre>

    <h3>예시 3: 신규 멤버 환영</h3>
    <pre><code>{`[제목] QA팀 새 멤버 환영합니다
[카테고리] 일반

이번 주부터 QA팀에 합류한 김OO 님을 환영합니다.

- 담당: Frontend 테스트
- 역할: T-CAFE에서 Tester 권한
- 자리: 사무실 3층

많은 관심과 도움 부탁드립니다.`}</code></pre>

    <hr />

    <h2>12. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>글쓰기 버튼이 안 보임</td><td>Admin 권한 없음</td><td>Admin에게 요청</td></tr>
        <tr><td>첨부파일 업로드 실패</td><td>프로젝트 50 MB 한도 초과</td><td>기존 Attachments 일부 삭제 후 재시도 (<Link to="/support/guide/attachments">12. 첨부파일</Link> 참고)</td></tr>
        <tr><td>본문에 코드가 깨짐</td><td>코드 블록 형식 사용 안 함</td><td>코드 블록 버튼 사용</td></tr>
        <tr><td>조회수가 안 늘어남</td><td>같은 세션에서 재조회</td><td>다른 사용자가 조회해야 함</td></tr>
        <tr><td>게시글이 보이지 않음</td><td>페이지네이션 문제</td><td>다음 페이지 확인</td></tr>
        <tr><td>삭제하고 싶음</td><td>Admin 권한 필요</td><td>Admin에게 요청</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>13. 게시판 vs 다른 통신 도구</h2>
    <table>
      <thead>
        <tr><th>도구</th><th>강점</th><th>T-CAFE 게시판과의 관계</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Slack/Teams</strong></td><td>실시간, 빠른 응답</td><td>즉각적 소통은 Slack, 영구 기록은 게시판</td></tr>
        <tr><td><strong>이메일</strong></td><td>외부 공유</td><td>외부 보고는 이메일, 내부 안내는 게시판</td></tr>
        <tr><td><strong>Confluence</strong></td><td>문서, 위키</td><td>정교한 문서는 Confluence, 짧은 공지는 게시판</td></tr>
        <tr><td><strong>Jira Issue 코멘트</strong></td><td>특정 이슈 토론</td><td>이슈 관련은 Jira, 일반 안내는 게시판</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/overview-dashboard">14. Overview 대시보드</Link> — 게시판이 표시되는 메인 페이지</li>
      <li><Link to="/support/guide/permissions">02. 사용자 권한</Link> — Admin 권한 부여</li>
    </ul>
  </article>
);

export default Board;
