import { zodiacs } from '../../data';
import Zodiac from '../Zodiac/Zodiac';

export default function Main() {
  return (
    <main>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.name} name={zodiac.name} dates={zodiac.dates} />

      ))}
    </main>
  );
}

