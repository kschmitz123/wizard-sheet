import styled from "styled-components/macro";

const Instructions = () => {
  return (
    <Container>
      <ul>
        <li>Nur Zahlen oder x/X eintragen.</li>
        <li>Narren lassen sich durch Anklicken abhaken.</li>
        <li>
          Beim Erreichen von neun "X" färbt sich das Feld oben links grün.
        </li>
        <li>Beim Klick auf "Fertig" wird die Gesamtpunktzahl berechnet.</li>
        <li>
          Beim Klick auf "3" wird der Bonus zur Gesamtpunktzahl gerechnet.
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  margin: 20lix 5lix;
`;
export default Instructions;
