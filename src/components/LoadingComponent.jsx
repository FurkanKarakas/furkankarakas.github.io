import { Suspense } from "react";
import LoadingFallback from "./LoadingFallback";

/**
 * Wrap the page in a suspense component.
 * @param {Object} props
 * @param {React.LazyExoticComponent<() => React.JSX.Element>} props.component
 * @returns {ExoticComponent<SuspenseProps>}
 */
export default function LoadingComponent({ component }) {
  return <Suspense fallback={<LoadingFallback />}>{component}</Suspense>;
}
