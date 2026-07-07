import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DataTable({ columns, data, pageSize = 8 }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const filtered = useMemo(() => {
    let items = [...data];

    if (search) {
      const q = search.toLowerCase();
      items = items.filter((row) =>
        columns.some((col) => String(row[col.key]).toLowerCase().includes(q))
      );
    }

    if (filter !== "all") {
      items = items.filter((row) => row.status === filter);
    }

    if (sortKey) {
      items.sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
        if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }

    return items;
  }, [data, search, filter, sortKey, sortDir, columns]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const statusStyles = {
    Applied: "text-blue-electric bg-blue-electric/10",
    Screening: "text-yellow-400 bg-yellow-400/10",
    Interview: "text-purple-brand bg-purple-brand/10",
    Offer: "text-emerald-brand bg-emerald-brand/10",
    Rejected: "text-red-400 bg-red-400/10",
  };

  return (
    <div className="glass-card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3 flex-wrap">
          {["all", "Applied", "Screening", "Interview", "Offer"].map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setPage(1); }}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === f
                  ? "bg-blue-electric/10 text-blue-electric"
                  : "text-text-tertiary hover:text-text-secondary bg-transparent"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-56">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-bg-tertiary/50 text-sm text-text-primary rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-glass-border">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                  className={`text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider pb-3 pr-4 ${
                    col.sortable !== false ? "cursor-pointer hover:text-text-secondary" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {col.label}
                    {sortKey === col.key && (
                      <svg className={`w-3 h-3 transition-transform ${sortDir === "desc" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {paginated.map((row, i) => (
                <motion.tr
                  key={row.id || i}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className="border-b border-glass-border last:border-0 group"
                >
                  {columns.map((col) => {
                    const val = row[col.key];
                    const isStatus = col.key === "status";
                    return (
                      <td key={col.key} className="py-3.5 pr-4 last:pr-0">
                        {col.render ? (
                          col.render(val, row)
                        ) : isStatus ? (
                          <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-lg ${statusStyles[val] || "text-text-tertiary bg-bg-tertiary/50"}`}>
                            {val}
                          </span>
                        ) : (
                          <span className="text-text-primary">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {paginated.length === 0 && (
          <div className="text-center py-12 text-text-tertiary text-sm">No results found</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-glass-border">
          <span className="text-xs text-text-tertiary">
            Page {page} of {totalPages}
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="px-3 py-1.5 text-xs rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 text-xs rounded-lg transition-all cursor-pointer ${
                  p === page
                    ? "bg-blue-electric/10 text-blue-electric font-semibold"
                    : "text-text-tertiary hover:text-text-primary hover:bg-white/[0.03]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-3 py-1.5 text-xs rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
