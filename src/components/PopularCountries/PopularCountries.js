import React, { useState, useEffect } from "react";
import "../../sass/components/PopularCountries.scss";
import allPrograms from "../../api/investmentPrograms";

const PopularCountries = () => {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("All Regions");
  const [minInvest, setMinInvest] = useState("Any");
  const [sortKey, setSortKey] = useState("program");
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("All Regions");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filtered = allPrograms.map((section) => {
    const regionName = section.region.split("Residency")[0].trim();
    return {
      ...section,
      regionName,
      programs: section.programs
        .filter(
          (p) =>
            (regionFilter === "All Regions" || section.region.includes(regionFilter)) &&
            (minInvest === "Any" || p.investmentValue >= parseInt(minInvest)) &&
            (search === "" ||
              p.title.toLowerCase().includes(search.toLowerCase()) ||
              section.region.toLowerCase().includes(search.toLowerCase()))
        )
        .sort((a, b) => {
          if (sortKey === "program") return a.title.localeCompare(b.title);
          if (sortKey === "investment") return a.investmentValue - b.investmentValue;
          if (sortKey === "processing") return a.processingValue - b.processingValue;
          return 0;
        }),
    };
  });

  const visibleTabs = ["All Regions", ...new Set(filtered.map((s) => s.regionName))];
  const investOptions = ["Any", "100000", "250000", "500000"];

  let displayedSections;
  const isFiltering = search !== "" || minInvest !== "Any" || regionFilter !== "All Regions";

  if (search) {
    const matchingPrograms = [];
    allPrograms.forEach((section) => {
      section.programs.forEach((p) => {
        if (
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          section.region.toLowerCase().includes(search.toLowerCase())
        ) {
          if (minInvest === "Any" || p.investmentValue >= parseInt(minInvest)) {
            matchingPrograms.push({ ...p, region: section.region });
          }
        }
      });
    });

    displayedSections =
      matchingPrograms.length > 0
        ? [
            {
              region: `Search Results for "${search}"`,
              regionName: "Search",
              programs: matchingPrograms,
            },
          ]
        : [
            {
              region: `No results found for "${search}"`,
              regionName: "None",
              programs: [],
            },
          ];
  } else if (activeTab === "All Regions") {
    let combinedPrograms = [];
    filtered.forEach((section) => {
      combinedPrograms = combinedPrograms.concat(
        section.programs.map((p) => ({ ...p, region: section.region }))
      );
    });
    combinedPrograms = combinedPrograms.slice(0, 10);

    displayedSections = [
      {
        region: "Top 10 Investment Programs",
        regionName: "Top 10",
        programs: combinedPrograms,
      },
    ];
  } else {
    displayedSections = filtered.filter(
      (f) => f.regionName === activeTab && f.programs.length > 0
    );
  }

  return (
    <section className="citizenship-programs">
      <div className="container">
        <div className="toolbar">
          <input
            type="search"
            placeholder="Search by program or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
            {visibleTabs.map((r, i) => (
              <option key={i}>{r}</option>
            ))}
          </select>
          <select value={minInvest} onChange={(e) => setMinInvest(e.target.value)}>
            {investOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt === "Any" ? "Any Investment" : `€${opt}`}
              </option>
            ))}
          </select>
          <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
            <option value="program">Sort: Program</option>
            <option value="investment">Sort: Investment</option>
            <option value="processing">Sort: Processing</option>
          </select>
          <button
            className="clear-btn"
            onClick={() => {
              setSearch("");
              setRegionFilter("All Regions");
              setMinInvest("Any");
              setSortKey("program");
              setActiveTab("All Regions");
            }}
          >
            Clear
          </button>
        </div>

        <nav className="region-tabs">
          {visibleTabs.map((tab, idx) => (
            <button
              key={idx}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab} Programs
            </button>
          ))}
        </nav>

        {displayedSections.map((section, si) => (
          <div className="region-section" key={si}>
            <h2>{section.region}</h2>
            <div className="table-container">
              {section.programs.length === 0 ? (
                <p className="no-results-msg">
                  No matching programs found. Please try different filters.
                </p>
              ) : !isMobile ? (
                <table className="main-table">
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Investment</th>
                      <th>Processing</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.programs.map((p, i) => (
                      <tr key={i}>
                        <td className="prog">
                          <img src={p.icon} alt={`${p.country} flag`} className="flag-icon" loading="lazy" />
                          <span>{p.title}</span>
                        </td>
                        <td>{p.investment}</td>
                        <td>{p.processing}</td>
                        <td>
                          <ul>
                            {p.benefit
                              .split("\u2022")
                              .map((b, bi) => b.trim() && <li key={bi}>{b.trim()}</li>)}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="accordion">
                  {section.programs.map((p, i) => (
                    <details key={i}>
                      <summary>
                        <img src={p.icon} alt={`${p.country} flag`} />
                        <span>{p.title}</span>
                      </summary>
                      <div className="acc-content">
                        <div className="info-block">
                          <strong>Investment:</strong> {p.investment}
                        </div>
                        <div className="info-block">
                          <strong>Processing:</strong> {p.processing}
                        </div>
                        <div className="info-block">
                          <strong>Benefits:</strong>
                          <ul>
                            {p.benefit
                              .split("\u2022")
                              .map((b, bi) => b.trim() && <li key={bi}>{b.trim()}</li>)}
                          </ul>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCountries;