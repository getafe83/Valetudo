import React from "react";
import MapDataManagement from "./MapDataManagement";
import Speaker from "./Speaker";
import Switches from "./Switches";
import VoicePackManagement from "./VoicePackManagement";
import DoNotDisturb from "./DoNotDisturb";
import {CapabilityContainer} from "./CapabilityLayout";
import Wifi from "./Wifi";
import PaperContainer from "../../components/PaperContainer";
import Quirks from "./Quirks";
import {useCapabilitiesSupported} from "../../CapabilitiesProvider";
import {Capability} from "../../api";

const Capabilities = (): JSX.Element => {
    const components = [
        Switches,
        Speaker,
        VoicePackManagement,
        DoNotDisturb,
        Wifi,
        MapDataManagement
    ];
    const [quirksSupported] = useCapabilitiesSupported(Capability.Quirks);

    if (quirksSupported) {
        components.push(Quirks);
    }


    return (
        <PaperContainer>
            <CapabilityContainer>
                {components.map((Component, idx) => {
                    return <Component key={idx}/>;
                })}
            </CapabilityContainer>
        </PaperContainer>
    );
};

export default Capabilities;
