import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Checkbox,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const STh = styled(Th)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  text-transform: none;
`;
const STd = styled(Td)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

export const MeetingTable = () => {
  return (
    <TableContainer>
      <Table colorScheme="facebook" variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th pl={2} pr={0} lineHeight={1}>
              <Checkbox />
            </Th>
            <STh pl={2}>Name</STh>
            <STh>Time</STh>
            <STh>Account</STh>
            <STh>Next steps</STh>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td pl={2} pr={0} lineHeight={1}>
              <Checkbox />
            </Td>
            <STd pl={2}>Apple x Startup</STd>
            <STd>June 22nd, 2023 8:15AM</STd>
            <STd>Apple</STd>
            <STd>
              <ul>
                <li>Send contract</li>
                <li>Send contract</li>
                <li>Send contract</li>
              </ul>
            </STd>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
