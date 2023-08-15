import { StyleSheet } from "react-native";

import type { CustomDurationPickerStyles } from "./DurationPicker/DurationPicker.styles";

export interface CustomDurationPickerModalStyles
    extends CustomDurationPickerStyles {
    container?: any;
    contentContainer?: any;
    pickerContainer?: any;
    pickerLabel?: any;
    pickerItemContainer?: any;
    pickerItem?: any;
    buttonContainer?: any;
    button?: any;
    cancelButton?: any;
    confirmButton?: any;
    modalTitle?: any;
}

const DARK_MODE_BACKGROUND_COLOR = "#232323";
const DARK_MODE_TEXT_COLOR = "#E9E9E9";
const LIGHT_MODE_BACKGROUND_COLOR = "#F1F1F1";
const LIGHT_MODE_TEXT_COLOR = "#1B1B1B";

export const generateStyles = (
    customStyles: CustomDurationPickerModalStyles | undefined
) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            ...customStyles?.container,
        },
        contentContainer: {
            backgroundColor:
                customStyles?.backgroundColor ?? customStyles?.theme === "dark"
                    ? DARK_MODE_BACKGROUND_COLOR
                    : LIGHT_MODE_BACKGROUND_COLOR,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            padding: 20,
            ...customStyles?.contentContainer,
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 25,
            ...customStyles?.buttonContainer,
        },
        button: {
            marginHorizontal: 12,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 16,
            overflow: "hidden",
            ...customStyles?.button,
        },
        cancelButton: {
            borderColor: "gray",
            color:
                customStyles?.textColor ?? customStyles?.theme === "dark"
                    ? DARK_MODE_TEXT_COLOR
                    : "gray",
            backgroundColor:
                customStyles?.theme === "dark" ? "gray" : undefined,
            ...customStyles?.cancelButton,
        },
        confirmButton: {
            borderColor: "green",
            color:
                customStyles?.textColor ?? customStyles?.theme === "dark"
                    ? DARK_MODE_TEXT_COLOR
                    : "green",
            backgroundColor:
                customStyles?.theme === "dark" ? "green" : undefined,
            ...customStyles?.confirmButton,
        },
        modalTitle: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 15,
            color:
                customStyles?.textColor ?? customStyles?.theme === "dark"
                    ? DARK_MODE_TEXT_COLOR
                    : LIGHT_MODE_TEXT_COLOR,
            ...customStyles?.modalTitle,
        },
    });