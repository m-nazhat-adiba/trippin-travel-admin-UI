import { useRouter } from "next/router";

function usePath() {
  const router = useRouter();
  const path = router.pathname;
  return path;
}

export default usePath;
