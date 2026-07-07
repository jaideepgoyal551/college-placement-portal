import KanbanBoard from "../shared/KanbanBoard";

const columns = [
  {
    id: "applied", title: "Applied", color: "bg-blue-electric",
    items: [
      { id: 1, name: "Sneha Patel", initials: "SP", role: "Frontend Intern", status: "Applied", score: 76 },
      { id: 2, name: "Divya Nair", initials: "DN", role: "PM Intern", status: "Applied", score: 79 },
      { id: 5, name: "Rohit Kumar", initials: "RK", role: "SWE Intern", status: "Applied", score: 54 },
    ],
  },
  {
    id: "screening", title: "Screening", color: "bg-yellow-400",
    items: [
      { id: 3, name: "Neha Kapoor", initials: "NK", role: "ML Engineer", status: "Screening", score: 85 },
      { id: 7, name: "Ananya Gupta", initials: "AG", role: "Design Intern", status: "Screening", score: 71 },
    ],
  },
  {
    id: "shortlisted", title: "Shortlisted", color: "bg-purple-brand",
    items: [
      { id: 4, name: "Arjun Mehta", initials: "AM", role: "PM Intern", status: "Shortlisted", score: 88 },
      { id: 6, name: "Vikram Singh", initials: "VS", role: "Backend Intern", status: "Shortlisted", score: 82 },
    ],
  },
  {
    id: "interview", title: "Interview", color: "bg-emerald-brand",
    items: [
      { id: 8, name: "Priya Sharma", initials: "PS", role: "SWE Intern", status: "Interview", score: 92 },
      { id: 9, name: "Iyer Krishnan", initials: "IK", role: "ML Engineer", status: "Interview", score: 87 },
    ],
  },
];

export default function ShortlistCandidatesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Shortlist Candidates</h1>
        <p className="text-text-secondary mt-1 text-sm">Drag and drop candidates through your pipeline.</p>
      </div>
      <KanbanBoard columns={columns} onCardClick={(item) => alert(`Viewing ${item.name}`)} />
    </div>
  );
}
