"use client";

import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";

export default function TalentCard(props) {
  return (
    <CardContainer className="bg-black p-8">
      <CardBody className="flex flex-col items-center space-y-4">
        <CardItem translateZ={100}>
          <img src={props.image} alt={props.name} />
        </CardItem>
        <div className="flex flex-col items-center">
          <CardItem translateZ={50}>
            <h2 className="text-4xl font-bold text-center">{props.name}</h2>
          </CardItem>
          <CardItem translateZ={60}>
            <p className="text-justify">{props.description}</p>
          </CardItem>
        </div>
        <CardItem translateZ={20}>
          <div className="flex flex-row space-x-4">
            {props.socials.map((social) => (
              <a href={social.href} key={social.href}>
                <img
                  src={`${social.icon}`}
                  className="h-8"
                  title={social.title}
                />
              </a>
            ))}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
