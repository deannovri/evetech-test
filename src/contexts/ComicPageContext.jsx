import React, { useState, useContext, createContext } from "react";

const RedScrollQuestion1InitialState = createContext();
const HandleOpenRedScrollQuestion1 = createContext();
const HandleChangeRedScrollQuestion1 = createContext();
const HandleSubmitRedScrollQuestion1 = createContext();
const Question1ResultState = createContext();
const HandleOpenPurpleScrollBoyGirl = createContext();
const PurpleScrollBoyGirlInitialState = createContext();
const SelectBoy = createContext();
const SelectGirl = createContext();
const SelectBoyState = createContext();
const SelectGirlState = createContext();
const CreateBoyGirl = createContext();
const Panel1Boy = createContext();
const Panel1Girl = createContext();
const RedScrollQuestion2InitialState = createContext();
const HandleOpenRedScrollQuestion2 = createContext();
const HandleChangeRedScrollQuestion2 = createContext();
const HandleSubmitRedScrollQuestion2 = createContext();
const Question2ResultState = createContext();
const HandleOpenPurpleScrollSmokeBombHook = createContext();
const PurpleScrollSmokeBombHookInitialState = createContext();
const SelectSmokeBomb = createContext();
const SelectHook = createContext();
const SelectSmokeBombState = createContext();
const SelectHookState = createContext();
const CreateSmokeBombHook = createContext();
const Panel3SmokeBomb = createContext();
const Panel3Hook = createContext();
const Panel3NumberLockState = createContext();
const Panel3CreateState = createContext();
const Panel4Boy = createContext();
const Panel4Girl = createContext();
const Panel5CreateState = createContext();
const Panel5NumberLockState = createContext();
const RedScrollQuestion3InitialState = createContext();
const HandleOpenRedScrollQuestion3 = createContext();

export function useRedScrollQuestion1InitialState() {
    return useContext(RedScrollQuestion1InitialState);
}

export function useHandleOpenRedScrollQuestion1() {
    return useContext(HandleOpenRedScrollQuestion1);
}

export function useHandleChangeRedScrollQuestion1() {
    return useContext(HandleChangeRedScrollQuestion1);
}

export function useHandleSubmitRedScrollQuestion1() {
    return useContext(HandleSubmitRedScrollQuestion1);
}

export function useQuestion1ResultState() {
    return useContext(Question1ResultState);
}

export function useHandleOpenPurpleScrollBoyGirl() {
    return useContext(HandleOpenPurpleScrollBoyGirl);
}

export function usePurpleScrollBoyGirlInitialState() {
    return useContext(PurpleScrollBoyGirlInitialState);
}

export function useSelectBoy() {
    return useContext(SelectBoy);
}

export function useSelectGirl() {
    return useContext(SelectGirl);
}

export function useSelectBoyState() {
    return useContext(SelectBoyState);
}

export function useSelectGirlState() {
    return useContext(SelectGirlState);
}

export function useHandleCreateBoyGirl() {
    return useContext(CreateBoyGirl);
}

export function usePanel1Boy() {
    return useContext(Panel1Boy);
}

export function usePanel1Girl() {
    return useContext(Panel1Girl);
}

export function useRedScrollQuestion2InitialState() {
    return useContext(RedScrollQuestion2InitialState);
}

export function useHandleOpenRedScrollQuestion2() {
    return useContext(HandleOpenRedScrollQuestion2);
}

export function useHandleChangeRedScrollQuestion2() {
    return useContext(HandleChangeRedScrollQuestion2);
}

export function useHandleSubmitRedScrollQuestion2() {
    return useContext(HandleSubmitRedScrollQuestion2);
}

export function useQuestion2ResultState() {
    return useContext(Question2ResultState);
}

export function useHandleOpenPurpleScrollSmokeBombHook() {
    return useContext(HandleOpenPurpleScrollSmokeBombHook);
}

export function usePurpleScrollSmokeBombHookInitialState() {
    return useContext(PurpleScrollSmokeBombHookInitialState);
}

export function useSelectSmokeBomb() {
    return useContext(SelectSmokeBomb);
}

export function useSelectHook() {
    return useContext(SelectHook);
}

export function useSelectSmokeBombState() {
    return useContext(SelectSmokeBombState);
}

export function useSelectHookState() {
    return useContext(SelectHookState);
}

export function useHandleCreateSmokeBombHook() {
    return useContext(CreateSmokeBombHook);
}

export function usePanel3SmokeBomb() {
    return useContext(Panel3SmokeBomb);
}

export function usePanel3Hook() {
    return useContext(Panel3Hook);
}

export function usePanel3NumberLockState() {
    return useContext(Panel3NumberLockState);
}

export function usePanel3CreateState() {
    return useContext(Panel3CreateState);
}

export function usePanel4Boy() {
    return useContext(Panel4Boy);
}

export function usePanel4Girl() {
    return useContext(Panel4Girl);
}

export function usePanel5CreateState() {
    return useContext(Panel5CreateState);
}

export function usePanel5NumberLockState() {
    return useContext(Panel5NumberLockState);
}

export function useRedScrollQuestion3InitialState() {
    return useContext(RedScrollQuestion3InitialState);
}

export function useHandleOpenRedScrollQuestion3() {
    return useContext(HandleOpenRedScrollQuestion3);
}

export default function ComicPageContext({ children }) {
    const [create, setCreate] = useState(false);
    const [answer1, setAnswer1] = useState("");
    const [submitAnswer1, setSubmitAnswer1] = useState(null);
    const [openPurpleScrollBoyGirl, setOpenPurpleScrollBoyGirl] =
        useState(false);
    const [selectBoy, setSelectBoy] = useState(false);
    const [selectGirl, setSelectGirl] = useState(false);
    const [panel1Boy, setPanel1Boy] = useState(false);
    const [panel1Girl, setPanel1Girl] = useState(false);
    const [createQuestion2, setCreateQuestion2] = useState(false);
    const [answer2, setAnswer2] = useState("");
    const [submitAnswer2, setSubmitAnswer2] = useState(null);
    const [openPurpleScrollSmokeBombHook, setOpenPurpleScrollSmokeBombHook] =
        useState(false);
    const [selectSmokeBomb, setSelectSmokeBomb] = useState(false);
    const [selectHook, setSelectHook] = useState(false);
    const [panel3SmokeBomb, setPanel3SmokeBomb] = useState(false);
    const [panel3Hook, setPanel3Hook] = useState(false);
    const [panel3NumberLockState, setPanel3NumberLockState] = useState(true);
    const [panel3CreateState, setPanel3CreateState] = useState(false);
    const [panel4Boy, setPanel4Boy] = useState(false);
    const [panel4Girl, setPanel4Girl] = useState(false);
    const [panel5CreateState, setPanel5CreateState] = useState(false);
    const [panel5NumberLockState, setPanel5NumberLockState] = useState(true);
    const [createQuestion3, setCreateQuestion3] = useState(false);

    function OpenRedScrollQuestion1() {
        setCreate(true);
    }

    function HandleChangeQuestion1(e) {
        setAnswer1(e.target.value);
    }

    function HandleSubmitQuestion1(e) {
        answer1 === "react" ? setSubmitAnswer1(true) : setSubmitAnswer1(false);
    }

    function OpenPurpleScrollBoyGirl() {
        setOpenPurpleScrollBoyGirl(true);
        setCreate(false);
    }

    function HandleSelectBoy() {
        setSelectBoy(true);
    }

    function HandleSelectGirl() {
        setSelectGirl(true);
    }

    function HandleCreateBoyGirl() {
        if (selectBoy === true) {
            return (
                setPanel1Boy(true) &
                setOpenPurpleScrollBoyGirl(false) &
                setPanel3NumberLockState(false) &
                setPanel3CreateState(true)
            );
        } else if (selectGirl === true) {
            return (
                setPanel1Girl(true) &
                setOpenPurpleScrollBoyGirl(false) &
                setPanel3NumberLockState(false) &
                setPanel3CreateState(true)
            );
        }
    }

    function OpenRedScrollQuestion2() {
        setCreateQuestion2(true);
    }

    function HandleChangeQuestion2(e) {
        setAnswer2(e.target.value);
    }

    function HandleSubmitQuestion2(e) {
        answer2 === "react" ? setSubmitAnswer2(true) : setSubmitAnswer2(false);
    }

    function OpenPurpleScrollSmokeBombHook() {
        setOpenPurpleScrollSmokeBombHook(true);
        setCreateQuestion2(false);
    }

    function HandleSelectSmokeBomb() {
        setSelectSmokeBomb(true);
    }

    function HandleSelectHook() {
        setSelectHook(true);
    }

    function HandleCreateSmokeBomb() {
        if (selectSmokeBomb === true) {
            return (
                setPanel3SmokeBomb(true) &
                setOpenPurpleScrollSmokeBombHook(false) &
                setPanel3CreateState(false) &
                setPanel4Girl(true) &
                setPanel4Boy(true) &
                setPanel5CreateState(true) &
                setPanel5NumberLockState(false)
            );
        } else if (selectHook === true) {
            return (
                setPanel3Hook(true) &
                setOpenPurpleScrollSmokeBombHook(false) &
                setPanel3CreateState(false) &
                setPanel4Girl(true) &
                setPanel4Boy(true) &
                setPanel5CreateState(true) &
                setPanel5NumberLockState(false)
            );
        }
    }

    function OpenRedScrollQuestion3() {
        setCreateQuestion3(true);
    }

    return (
        <Panel5NumberLockState.Provider value={panel5NumberLockState}>
            <HandleOpenRedScrollQuestion3.Provider
                value={OpenRedScrollQuestion3}
            >
                <RedScrollQuestion3InitialState.Provider
                    value={createQuestion3}
                >
                    <Panel5CreateState.Provider value={panel5CreateState}>
                        <Panel4Girl.Provider value={panel4Girl}>
                            <Panel4Boy.Provider value={panel4Boy}>
                                <Panel3CreateState.Provider
                                    value={panel3CreateState}
                                >
                                    <Panel3NumberLockState.Provider
                                        value={panel3NumberLockState}
                                    >
                                        <Panel3Hook.Provider value={panel3Hook}>
                                            <Panel3SmokeBomb.Provider
                                                value={panel3SmokeBomb}
                                            >
                                                <CreateSmokeBombHook.Provider
                                                    value={
                                                        HandleCreateSmokeBomb
                                                    }
                                                >
                                                    <SelectHookState.Provider
                                                        value={selectHook}
                                                    >
                                                        <SelectSmokeBombState.Provider
                                                            value={
                                                                selectSmokeBomb
                                                            }
                                                        >
                                                            <SelectHook.Provider
                                                                value={
                                                                    HandleSelectHook
                                                                }
                                                            >
                                                                <SelectSmokeBomb.Provider
                                                                    value={
                                                                        HandleSelectSmokeBomb
                                                                    }
                                                                >
                                                                    <PurpleScrollSmokeBombHookInitialState.Provider
                                                                        value={
                                                                            openPurpleScrollSmokeBombHook
                                                                        }
                                                                    >
                                                                        <HandleOpenPurpleScrollSmokeBombHook.Provider
                                                                            value={
                                                                                OpenPurpleScrollSmokeBombHook
                                                                            }
                                                                        >
                                                                            <Question2ResultState.Provider
                                                                                value={
                                                                                    submitAnswer2
                                                                                }
                                                                            >
                                                                                <HandleSubmitRedScrollQuestion2.Provider
                                                                                    value={
                                                                                        HandleSubmitQuestion2
                                                                                    }
                                                                                >
                                                                                    <HandleChangeRedScrollQuestion2.Provider
                                                                                        value={
                                                                                            HandleChangeQuestion2
                                                                                        }
                                                                                    >
                                                                                        <HandleOpenRedScrollQuestion2.Provider
                                                                                            value={
                                                                                                OpenRedScrollQuestion2
                                                                                            }
                                                                                        >
                                                                                            <RedScrollQuestion2InitialState.Provider
                                                                                                value={
                                                                                                    createQuestion2
                                                                                                }
                                                                                            >
                                                                                                <Panel1Girl.Provider
                                                                                                    value={
                                                                                                        panel1Girl
                                                                                                    }
                                                                                                >
                                                                                                    <Panel1Boy.Provider
                                                                                                        value={
                                                                                                            panel1Boy
                                                                                                        }
                                                                                                    >
                                                                                                        <CreateBoyGirl.Provider
                                                                                                            value={
                                                                                                                HandleCreateBoyGirl
                                                                                                            }
                                                                                                        >
                                                                                                            <SelectGirlState.Provider
                                                                                                                value={
                                                                                                                    selectGirl
                                                                                                                }
                                                                                                            >
                                                                                                                <SelectBoyState.Provider
                                                                                                                    value={
                                                                                                                        selectBoy
                                                                                                                    }
                                                                                                                >
                                                                                                                    <SelectGirl.Provider
                                                                                                                        value={
                                                                                                                            HandleSelectGirl
                                                                                                                        }
                                                                                                                    >
                                                                                                                        <SelectBoy.Provider
                                                                                                                            value={
                                                                                                                                HandleSelectBoy
                                                                                                                            }
                                                                                                                        >
                                                                                                                            <PurpleScrollBoyGirlInitialState.Provider
                                                                                                                                value={
                                                                                                                                    openPurpleScrollBoyGirl
                                                                                                                                }
                                                                                                                            >
                                                                                                                                <HandleOpenPurpleScrollBoyGirl.Provider
                                                                                                                                    value={
                                                                                                                                        OpenPurpleScrollBoyGirl
                                                                                                                                    }
                                                                                                                                >
                                                                                                                                    <Question1ResultState.Provider
                                                                                                                                        value={
                                                                                                                                            submitAnswer1
                                                                                                                                        }
                                                                                                                                    >
                                                                                                                                        <HandleSubmitRedScrollQuestion1.Provider
                                                                                                                                            value={
                                                                                                                                                HandleSubmitQuestion1
                                                                                                                                            }
                                                                                                                                        >
                                                                                                                                            <HandleChangeRedScrollQuestion1.Provider
                                                                                                                                                value={
                                                                                                                                                    HandleChangeQuestion1
                                                                                                                                                }
                                                                                                                                            >
                                                                                                                                                <RedScrollQuestion1InitialState.Provider
                                                                                                                                                    value={
                                                                                                                                                        create
                                                                                                                                                    }
                                                                                                                                                >
                                                                                                                                                    <HandleOpenRedScrollQuestion1.Provider
                                                                                                                                                        value={
                                                                                                                                                            OpenRedScrollQuestion1
                                                                                                                                                        }
                                                                                                                                                    >
                                                                                                                                                        {
                                                                                                                                                            children
                                                                                                                                                        }
                                                                                                                                                    </HandleOpenRedScrollQuestion1.Provider>
                                                                                                                                                </RedScrollQuestion1InitialState.Provider>
                                                                                                                                            </HandleChangeRedScrollQuestion1.Provider>
                                                                                                                                        </HandleSubmitRedScrollQuestion1.Provider>
                                                                                                                                    </Question1ResultState.Provider>
                                                                                                                                </HandleOpenPurpleScrollBoyGirl.Provider>
                                                                                                                            </PurpleScrollBoyGirlInitialState.Provider>
                                                                                                                        </SelectBoy.Provider>
                                                                                                                    </SelectGirl.Provider>
                                                                                                                </SelectBoyState.Provider>
                                                                                                            </SelectGirlState.Provider>
                                                                                                        </CreateBoyGirl.Provider>
                                                                                                    </Panel1Boy.Provider>
                                                                                                </Panel1Girl.Provider>
                                                                                            </RedScrollQuestion2InitialState.Provider>
                                                                                        </HandleOpenRedScrollQuestion2.Provider>
                                                                                    </HandleChangeRedScrollQuestion2.Provider>
                                                                                </HandleSubmitRedScrollQuestion2.Provider>
                                                                            </Question2ResultState.Provider>
                                                                        </HandleOpenPurpleScrollSmokeBombHook.Provider>
                                                                    </PurpleScrollSmokeBombHookInitialState.Provider>
                                                                </SelectSmokeBomb.Provider>
                                                            </SelectHook.Provider>
                                                        </SelectSmokeBombState.Provider>
                                                    </SelectHookState.Provider>
                                                </CreateSmokeBombHook.Provider>
                                            </Panel3SmokeBomb.Provider>
                                        </Panel3Hook.Provider>
                                    </Panel3NumberLockState.Provider>
                                </Panel3CreateState.Provider>
                            </Panel4Boy.Provider>
                        </Panel4Girl.Provider>
                    </Panel5CreateState.Provider>
                </RedScrollQuestion3InitialState.Provider>
            </HandleOpenRedScrollQuestion3.Provider>
        </Panel5NumberLockState.Provider>
    );
}
