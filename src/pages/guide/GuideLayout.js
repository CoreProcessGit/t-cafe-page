import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { guideCategories, guideMap, DEFAULT_GUIDE_SLUG } from './guidesIndex';
import '../../styles/guide.css';

const GuideLayout = () => {
  const params = useParams();
  const location = useLocation();
  const slug = params.slug || DEFAULT_GUIDE_SLUG;
  const guide = guideMap[slug];
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  useEffect(() => {
    setSidebarCollapsed(true);
  }, [location.pathname]);

  const Content = guide?.component;

  return (
    <div className="guide-page">
      <button
        type="button"
        className="guide-sidebar-toggle"
        onClick={() => setSidebarCollapsed((prev) => !prev)}
        aria-expanded={!sidebarCollapsed}
      >
        {sidebarCollapsed ? '▸ 가이드 목차 보기' : '▾ 가이드 목차 숨기기'}
      </button>

      <aside className={`guide-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="guide-sidebar-header">
          <h2>사용자 가이드</h2>
          <p>T-CAFE 사용 매뉴얼</p>
        </div>

        {guideCategories.map((category) => (
          <div key={category.title} className="guide-sidebar-category">
            <div className="guide-sidebar-category-title">{category.title}</div>
            {category.items.map((item) => (
              <Link
                key={item.slug}
                to={`/support/guide/${item.slug}`}
                className={`guide-sidebar-link ${item.slug === slug ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </aside>

      <div className="guide-content-wrap">
        {Content ? (
          <Content />
        ) : (
          <div className="guide-not-found">
            <h2>가이드를 찾을 수 없습니다</h2>
            <p>요청하신 가이드 페이지가 존재하지 않습니다.</p>
            <p>
              <Link to={`/support/guide/${DEFAULT_GUIDE_SLUG}`}>시작하기 가이드로 이동</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuideLayout;
