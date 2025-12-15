const institutes = [
  {
    name: "Viqarunnisa School and College",
    type: "College",
    typeColor: "green",
    students: 2,
    staff: 1,
    revenue: "৳1,600,000",
    status: "Active",
  },
  {
    name: "Police Line High School",
    type: "School",
    typeColor: "blue",
    students: 2,
    staff: 1,
    revenue: "৳1,600,000",
    status: "Active",
  },
  {
    name: "Pilot High School",
    type: "School",
    typeColor: "blue",
    students: 2,
    staff: 1,
    revenue: "৳1,600,000",
    status: "Active",
  },
  {
    name: "University of Dhaka",
    type: "University",
    typeColor: "purple",
    students: 2,
    staff: 1,
    revenue: "৳1,600,000",
    status: "Active",
  },
  {
    name: "Tech Land Institute",
    type: "College",
    typeColor: "green",
    students: 2,
    staff: 1,
    revenue: "৳1,600,000",
    status: "Active",
  },
];

const InstituteTable = () => {
  return (
    <div className="overflow-x-auto card-body bg-base-100 shadow-sm rounded-xl">
      <h3 className="text-3xl font-semibold">Institute Overview</h3>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="text-black">
            <th>Institute</th>
            <th>Type</th>
            <th>Students</th>
            <th>Staff</th>
            <th>Revenue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {institutes.map((institute, index) => (
            <tr key={index}>
              <th>{institute.name}</th>

              <td>
                <span
                  className={`badge bg-${institute.typeColor}-200 text-${institute.typeColor}-600`}
                >
                  {institute.type}
                </span>
              </td>

              <td>{institute.students}</td>
              <td>{institute.staff}</td>
              <td>{institute.revenue}</td>

              <td>
                <span className="badge badge-outline text-green-600">
                  {institute.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstituteTable;
