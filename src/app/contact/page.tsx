import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const technicalTeamDetails = [
  {
    team: "Tech Alpha",
    studentOrganizers: "John Doe, Jane Smith",
    mobile: "+1234567890",
    mailId: "techalpha@example.com",
  },
  {
    team: "Tech Beta",
    studentOrganizers: "Alice Brown, Bob Green",
    mobile: "+0987654321",
    mailId: "techbeta@example.com",
  },
];

const nonTechnicalTeamDetails = [
  {
    team: "Non-Tech Gamma",
    studentOrganizers: "Charlie Davis, Emma White",
    mobile: "+1122334455",
    mailId: "nontechgamma@example.com",
  },
  {
    team: "Non-Tech Delta",
    studentOrganizers: "Frank Harris, Grace Lee",
    mobile: "+1222333445",
    mailId: "nontechdelta@example.com",
  },
];

export default function EventTable() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-200 py-10 overflow-y-auto">
      {/* Technical Team Table */}
      <div className="w-11/12 mx-auto my-6 bg-gray-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-indigo-500 mb-6 text-center">
          Technical Team Organizers
        </h2>
        <Table>
          <TableCaption className="text-gray-400 mb-4">
            Details of the Technical Team Organizers.
          </TableCaption>
          <TableHeader>
            <TableRow className="text-left">
              <TableHead className="w-[50px] text-gray-300 py-3">
                S. No.
              </TableHead>
              <TableHead className="text-gray-300 py-3">Team</TableHead>
              <TableHead className="text-gray-300 py-3">
                Student Organizers
              </TableHead>
              <TableHead className="text-gray-300 py-3">Mobile</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {technicalTeamDetails.map((event, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-700 transition duration-300 cursor-pointer"
              >
                <TableCell className="text-gray-300 py-4">
                  {index + 1}
                </TableCell>
                <TableCell className="text-gray-300 py-4">
                  {event.team}
                </TableCell>
                <TableCell className="text-gray-300 py-4">
                  {event.studentOrganizers}
                </TableCell>
                <TableCell className="text-gray-300 py-4">
                  {event.mobile}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Non-Technical Team Table */}
      <div className="w-11/12 mx-auto my-6 bg-gray-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-indigo-500 mb-6 text-center">
          Non-Technical Team Organizers
        </h2>
        <Table>
          <TableCaption className="text-gray-400 mb-4">
            Details of the Non-Technical Team Organizers.
          </TableCaption>
          <TableHeader>
            <TableRow className="text-left">
              <TableHead className="w-[50px] text-gray-300 py-3">
                S. No.
              </TableHead>
              <TableHead className="text-gray-300 py-3">Team</TableHead>
              <TableHead className="text-gray-300 py-3">
                Student Organizers
              </TableHead>
              <TableHead className="text-gray-300 py-3">Mobile</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nonTechnicalTeamDetails.map((event, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-700 transition duration-300 cursor-pointer"
              >
                <TableCell className="text-gray-300 py-4">
                  {index + 1}
                </TableCell>
                <TableCell className="text-gray-300 py-4">
                  {event.team}
                </TableCell>
                <TableCell className="text-gray-300 py-4">
                  {event.studentOrganizers}
                </TableCell>
                <TableCell className="text-gray-300 py-4">
                  {event.mobile}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
