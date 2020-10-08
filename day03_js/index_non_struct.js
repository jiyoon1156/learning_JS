const irnMan = {
  name: "Tony Stark",
  actor: "RDJ",
  alias: "ironman",
};

function print({ alias, name, actor }) {
  //비구조화 할당
  // const { alias, name, actor } = hero;
  // 심지어 인자값으로도 받을 수 있음
  const text = `${alias}(${name}) played by ${actor}`;

  //구조화 할당
  // const text = `${hero.alias}(${hero.name}) played by ${hero.actor}`;
  console.log(text);
}

print(irnMan);
