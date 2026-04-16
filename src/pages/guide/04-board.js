import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import shotBoard from '../../assets/user_guide/04-board/1. board.png';
import shotWriteBoard from '../../assets/user_guide/04-board/2. write board.png';

const Board = () => (
  <article className="guide-article">
    <h1>04. 게시판 (Board)</h1>
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
    <ScreenshotSlot src={shotBoard} label="Overview 안의 게시판 영역" />

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

    <h2>4. 카테고리</h2>
    <p>게시글에는 카테고리 라벨이 표시됩니다. 현재 버전에서는 작성 화면에서 카테고리를 선택할 수 없으며, 모든 게시글은 <code>Notice</code> 카테고리로 저장됩니다. 목록/상세 화면에서는 제목 앞에 <code>[Notice]</code> 형태로 노출됩니다.</p>

    <hr />

    <h2>5. 게시글 조회</h2>

    <h3>목록 컬럼</h3>
    <ul>
      <li><strong>#</strong> — 게시글 번호 (최신 게시글이 가장 큰 번호)</li>
      <li><strong>카테고리</strong></li>
      <li><strong>제목</strong></li>
      <li><strong>작성자</strong></li>
      <li><strong>작성일</strong></li>
    </ul>

    <h3>정렬</h3>
    <ul>
      <li>작성일 기준 최신순 고정 (사용자 정렬 변경 불가)</li>
    </ul>

    <h3>페이지네이션</h3>
    <ul>
      <li>한 페이지에 <strong>5개</strong>씩 표시 (고정)</li>
      <li>페이지 번호 버튼과 이전/다음 화살표로 이동</li>
    </ul>

    <h3>게시글 상세 조회</h3>
    <ol>
      <li>목록에서 게시글 행을 클릭</li>
      <li>상세 모달이 열림</li>
      <li>표시 정보: <strong>[카테고리] 제목</strong>, 작성자, 작성일, <strong>조회수</strong>, 본문</li>
      <li>하단 <strong>목록</strong> 버튼으로 닫기</li>
    </ol>

    <aside className="guide-callout">조회수는 상세 화면에만 표시되며 목록에는 노출되지 않습니다.</aside>

    <hr />

    <h2>6. 게시글 작성 (Admin 전용)</h2>

    <h3>절차</h3>
    <ol>
      <li>게시판 하단 우측의 <strong>글작성</strong> 버튼 클릭</li>
      <li>작성 모달이 열림</li>
      <li>입력 항목:
        <ul>
          <li><strong>제목</strong> (필수)</li>
          <li><strong>내용</strong> (필수) — 리치 텍스트 에디터</li>
        </ul>
      </li>
      <li><strong>등록하기</strong> 버튼 클릭</li>
    </ol>

    <aside className="guide-callout">작성 화면에는 카테고리 선택, 파일 첨부, <strong>이미지 삽입</strong> 기능이 없습니다. 이미지·파일이 필요하면 T-CAFE <Link to="/support/guide/attachments">Attachments</Link>에 업로드한 뒤 링크를 본문에 붙여주세요.</aside>

    <ScreenshotSlot src={shotWriteBoard} label="게시글 작성 폼" />

    <h3>본문 에디터 기능 (Quill 툴바)</h3>
    <ul>
      <li>제목 수준 (H1 / H2 / H3)</li>
      <li><strong>굵게</strong>, <em>기울임</em>, 밑줄, 취소선</li>
      <li>글머리 기호 / 번호 목록</li>
      <li>정렬 (왼쪽/가운데/오른쪽)</li>
      <li>글자색 / 배경색</li>
      <li>링크 삽입</li>
    </ul>

    <hr />

    <h2>7. 게시글 수정 (Admin 전용)</h2>

    <h3>절차</h3>
    <ol>
      <li>수정할 게시글의 상세 모달을 엽니다</li>
      <li>상세 모달 우측 상단의 <strong>수정</strong> 버튼 클릭</li>
      <li>제목/내용을 수정합니다</li>
      <li><strong>수정하기</strong> 버튼 클릭</li>
    </ol>

    <hr />

    <h2>8. 게시글 삭제 (Admin 전용)</h2>

    <h3>절차</h3>
    <ol>
      <li>삭제할 게시글의 상세 모달을 엽니다</li>
      <li>우측 상단 <strong>삭제</strong> 버튼 클릭</li>
      <li>"작업 확인" 다이얼로그에서 확인</li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>삭제 된 게시글은 복구할 수 없습니다</li>
    </ul>

    <hr />

    <h2>9. 게시판 베스트 프랙티스</h2>

    <h3>Admin 가이드라인 (게시글 작성)</h3>

    <h4>DO</h4>
    <ul>
      <li><strong>명확한 제목</strong>: 무엇에 관한 글인지 한 줄로 파악 가능</li>
      <li><strong>간결하게</strong>: 본문은 500KB 이내로 유지 (초과 시 저장 실패)</li>
      <li><strong>첨부 자료는 Attachments에</strong>: 이미지·PDF·문서는 T-CAFE <Link to="/support/guide/attachments">Attachments</Link>에 업로드하고 URL을 본문에 링크로 삽입</li>
    </ul>

    <h4>DON'T</h4>
    <ul>
      <li>의미 없는 제목 ("공지", "안내"만 쓰는 등)</li>
      <li>같은 내용을 여러 번 게시</li>
      <li>긴 원문을 그대로 붙여넣기 (500KB 초과 시 저장 불가) — 링크로 대체</li>
    </ul>

    <h3>일반 사용자 가이드라인 (게시글 조회)</h3>
    <ul>
      <li>정기적으로 게시판 확인 (주 1회 권장)</li>
      <li>중요한 안내는 캡처/저장</li>
    </ul>

    <hr />

    <h2>10. 게시판 활용 예시</h2>

    <h3>예시 1: 신규 환경 안내</h3>
    <pre><code>{`[제목] 새 테스트 환경 사용 안내 (2026-04-15부터)

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

QA 팀에서 정리한 Factor Combination 활용 팁입니다.

1. 변수가 4개 이상이면 Pairwise 권장
2. Constraint를 적극 사용해 불가능한 조합 제거
3. 자세한 내용은 Confluence 문서를 참고해주세요.`}</code></pre>

    <h3>예시 3: 신규 멤버 환영</h3>
    <pre><code>{`[제목] QA팀 새 멤버 환영합니다

이번 주부터 QA팀에 합류한 김OO 님을 환영합니다.

- 담당: Frontend 테스트
- 역할: T-CAFE에서 Tester 권한
- 자리: 사무실 3층

많은 관심과 도움 부탁드립니다.`}</code></pre>

    <hr />

    <h2>11. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>글작성</strong> 버튼이 안 보임</td><td>Admin 권한 없음 (boardPost 권한 없음)</td><td>Admin에게 요청</td></tr>
        <tr><td>이미지를 본문에 넣고 싶음</td><td>Quill 툴바에 이미지 버튼 없음 (현재 버전은 게시판 본문 이미지 삽입 미지원)</td><td>T-CAFE <Link to="/support/guide/attachments">Attachments</Link>에 이미지를 업로드한 뒤, 다운로드 URL을 본문에 링크로 삽입</td></tr>
        <tr><td>파일을 첨부하고 싶음</td><td>게시판 작성 화면에 첨부 필드 없음</td><td>T-CAFE <Link to="/support/guide/attachments">Attachments</Link>에 파일을 업로드한 뒤, 링크를 본문에 붙여넣기</td></tr>
        <tr><td>게시글이 보이지 않음</td><td>페이지네이션 (한 페이지 5개)</td><td>다음 페이지 확인</td></tr>
        <tr><td>수정/삭제 버튼이 안 보임</td><td>Admin 권한 없음</td><td>Admin에게 요청</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/overview-dashboard">03. Overview 대시보드</Link> — 게시판이 표시되는 메인 페이지</li>
      <li><Link to="/support/guide/permissions">02. 사용자 권한</Link> — Admin 권한 부여</li>
    </ul>
  </article>
);

const BoardEn = () => (
  <article className="guide-article">
    <h1>04. Board</h1>
    <p className="guide-lead">
      The Board is a space for sharing announcements and information with project team members. It is accessible from the T-CAFE Overview page.
    </p>

    <hr />

    <h2>1. What is the Board?</h2>
    <p>A bulletin board that collects test-management announcements, notices, and issues in one place so they can be shared with the team.</p>

    <h3>Use Cases</h3>
    <ul>
      <li><strong>Announcement</strong>: "Starting next Monday, we will use the new test environment"</li>
      <li><strong>Release notes</strong>: "v1.5 release — summary of newly added features"</li>
      <li><strong>Test environment change</strong>: "Staging server maintenance notice"</li>
      <li><strong>Welcoming new members</strong>: "Kim from the QA team has joined us"</li>
      <li><strong>Best-practice sharing</strong>: "Tips for using Factor Combination"</li>
    </ul>

    <hr />

    <h2>2. Navigation</h2>
    <p>Top tab → <strong>Overview</strong> → Board section</p>
    <ScreenshotSlot src={shotBoard} label="Board section inside Overview" />

    <hr />

    <h2>3. Permissions</h2>
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
        <tr><td>View post</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td><strong>Create post</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Edit post</td><td className="center">O</td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>Delete post</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
      </tbody>
    </table>
    <aside className="guide-callout"><strong>Creating / editing / deleting posts is Admin-only</strong>. Other users can only view posts.</aside>

    <hr />

    <h2>4. Category</h2>
    <p>Each post is displayed with a category label. In the current version, the category cannot be chosen on the write form, and every post is stored with the <code>Notice</code> category. In the list and detail views, the title is prefixed with <code>[Notice]</code>.</p>

    <hr />

    <h2>5. Viewing Posts</h2>

    <h3>List Columns</h3>
    <ul>
      <li><strong>#</strong> — Post number (the newest post has the largest number)</li>
      <li><strong>Category</strong></li>
      <li><strong>Title</strong></li>
      <li><strong>Author</strong></li>
      <li><strong>Created date</strong></li>
    </ul>

    <h3>Sorting</h3>
    <ul>
      <li>Fixed to newest-first by created date (cannot be changed by the user)</li>
    </ul>

    <h3>Pagination</h3>
    <ul>
      <li><strong>5 posts</strong> per page (fixed)</li>
      <li>Navigate using the page-number buttons and the previous / next arrows</li>
    </ul>

    <h3>Viewing Post Details</h3>
    <ol>
      <li>Click a post row in the list</li>
      <li>The detail modal opens</li>
      <li>Displayed information: <strong>[Category] Title</strong>, author, created date, <strong>view count</strong>, body</li>
      <li>Close with the <strong>List</strong> button at the bottom</li>
    </ol>

    <aside className="guide-callout">The view count is only shown on the detail view and is not displayed in the list.</aside>

    <hr />

    <h2>6. Creating a Post (Admin only)</h2>

    <h3>Steps</h3>
    <ol>
      <li>Click the <strong>Write Post</strong> button at the bottom-right of the Board</li>
      <li>The write modal opens</li>
      <li>Fields:
        <ul>
          <li><strong>Title</strong> (required)</li>
          <li><strong>Content</strong> (required) — rich text editor</li>
        </ul>
      </li>
      <li>Click the <strong>Submit</strong> button</li>
    </ol>

    <aside className="guide-callout">The write form does not support category selection, file attachments, or <strong>image insertion</strong>. If you need images or files, upload them to T-CAFE <Link to="/support/guide/attachments">Attachments</Link> and paste the link into the body.</aside>

    <ScreenshotSlot src={shotWriteBoard} label="Post write form" />

    <h3>Body Editor Features (Quill toolbar)</h3>
    <ul>
      <li>Heading level (H1 / H2 / H3)</li>
      <li><strong>Bold</strong>, <em>italic</em>, underline, strikethrough</li>
      <li>Bulleted / numbered lists</li>
      <li>Alignment (left / center / right)</li>
      <li>Text color / background color</li>
      <li>Insert link</li>
    </ul>

    <hr />

    <h2>7. Editing a Post (Admin only)</h2>

    <h3>Steps</h3>
    <ol>
      <li>Open the detail modal for the post you want to edit</li>
      <li>Click the <strong>Edit</strong> button at the top-right of the detail modal</li>
      <li>Edit the title / content</li>
      <li>Click the <strong>Update</strong> button</li>
    </ol>

    <hr />

    <h2>8. Deleting a Post (Admin only)</h2>

    <h3>Steps</h3>
    <ol>
      <li>Open the detail modal for the post you want to delete</li>
      <li>Click the <strong>Delete</strong> button at the top-right</li>
      <li>Confirm in the "Confirm Action" dialog</li>
    </ol>

    <h3>Notes</h3>
    <ul>
      <li>Deleted posts cannot be recovered</li>
    </ul>

    <hr />

    <h2>9. Board Best Practices</h2>

    <h3>Admin Guidelines (writing posts)</h3>

    <h4>DO</h4>
    <ul>
      <li><strong>Clear title</strong>: the topic of the post should be clear in a single line</li>
      <li><strong>Keep it concise</strong>: keep the body under 500 KB (saving fails if exceeded)</li>
      <li><strong>Put attachments in Attachments</strong>: upload images / PDFs / documents to T-CAFE <Link to="/support/guide/attachments">Attachments</Link> and insert the URL as a link in the body</li>
    </ul>

    <h4>DON'T</h4>
    <ul>
      <li>Meaningless titles (such as just "Notice" or "FYI")</li>
      <li>Posting the same content multiple times</li>
      <li>Pasting long raw text as-is (saving fails if it exceeds 500 KB) — replace with a link</li>
    </ul>

    <h3>End-user Guidelines (reading posts)</h3>
    <ul>
      <li>Check the Board regularly (once a week recommended)</li>
      <li>Capture / save important notices</li>
    </ul>

    <hr />

    <h2>10. Board Usage Examples</h2>

    <h3>Example 1: New environment notice</h3>
    <pre><code>{`[Title] New test environment notice (starting 2026-04-15)

Hello — QA team here.

Starting Monday, April 15, we will use the new test environment.

1. New environment
 - URL: https://staging-v2.example.com
 - DB: new instance (test data is reset)

2. Existing environment
 - Available until April 14
 - Decommissioned from April 15

3. Changes
 - 30% faster response time
 - New payment module applied

Contact: contact@coreprocess.co.kr`}</code></pre>

    <h3>Example 2: Best-practice sharing</h3>
    <pre><code>{`[Title] Using Factor Combination efficiently

Tips from the QA team for using Factor Combination.

1. If you have 4+ variables, Pairwise is recommended
2. Use Constraints aggressively to eliminate impossible combinations
3. See the Confluence documentation for details.`}</code></pre>

    <h3>Example 3: Welcoming a new member</h3>
    <pre><code>{`[Title] Welcome to the QA team

Please welcome Kim, who joined the QA team this week.

- Area: Frontend testing
- Role: Tester in T-CAFE
- Seat: 3rd floor of the office

Your support and welcome are appreciated.`}</code></pre>

    <hr />

    <h2>11. Common Issues</h2>
    <table>
      <thead>
        <tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Write Post</strong> button is not visible</td><td>No Admin permission (no boardPost permission)</td><td>Ask an Admin</td></tr>
        <tr><td>Want to embed an image in the body</td><td>Quill toolbar has no image button (the current version does not support inline images in the Board)</td><td>Upload the image to T-CAFE <Link to="/support/guide/attachments">Attachments</Link> and insert the download URL as a link in the body</td></tr>
        <tr><td>Want to attach a file</td><td>The Board write form has no attachment field</td><td>Upload the file to T-CAFE <Link to="/support/guide/attachments">Attachments</Link> and paste the link in the body</td></tr>
        <tr><td>A post is not visible</td><td>Pagination (5 per page)</td><td>Check the next page</td></tr>
        <tr><td>Edit / Delete buttons are not visible</td><td>No Admin permission</td><td>Ask an Admin</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>Next Steps</h2>
    <ul>
      <li><Link to="/support/guide/overview-dashboard">03. Overview Dashboard</Link> — the main page where the Board appears</li>
      <li><Link to="/support/guide/permissions">02. User Permissions</Link> — granting Admin permissions</li>
    </ul>
  </article>
);

export default { ko: <Board />, en: <BoardEn /> };
