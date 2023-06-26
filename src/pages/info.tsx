import * as React from "react";
import { Link } from "gatsby";

export default function Component() {
  return (
    <>
      <p> This is the Info Page!</p>
      <p>
        Go back <Link to="/"> home</Link>
      </p>
    </>
  );
}
