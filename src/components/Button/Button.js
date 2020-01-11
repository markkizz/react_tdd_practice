import React from "react";

export default function Button({ children }) {
  return (
    <div data-testid="button">
      <button>{children}</button>
    </div>
  );
}
