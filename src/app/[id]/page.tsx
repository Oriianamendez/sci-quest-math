"use client";

export default function PupilPage({ params }: { params: { id: string } }) {
  console.log(params);
  return <h1>{params.id}</h1>;
}
