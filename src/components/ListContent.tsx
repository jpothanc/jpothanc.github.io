import React from "react";

type Prop = {
  list: string[];
};

const ListContent = ({ list }: Prop) => {
  return (
    <>
      <div className="card">
        <section className="intro">
          <ul>
            {list.map((l) => {
              return (
                <li>
                  {l}
                  <br></br>
                  <br></br>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default ListContent;
