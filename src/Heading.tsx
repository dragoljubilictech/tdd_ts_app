import React from 'react';

type HeadingProps = { name?: string };

function Heading({ name = 'React' }: HeadingProps) {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default Heading;
