import React from "react";
import { IonButton } from "@ionic/react";

export const NavButtons: React.FC = () => {
      return (
        <div>
              <IonButton routerLink={"/home"}>Home </IonButton>
              <IonButton routerLink={"/about"}>About </IonButton>
        </div>
      );
};