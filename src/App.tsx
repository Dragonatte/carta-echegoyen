import { CartaDigital } from "./components/carta/CartaDigital";
import { useIframeAutoHeight } from "./hooks/useIframeAutoHeight";

export default function App() {
  useIframeAutoHeight();

  return (
      <main className={"bg-bg text-text min-h-screen scroll-smooth"}>
        <CartaDigital />
      </main>
  );
}