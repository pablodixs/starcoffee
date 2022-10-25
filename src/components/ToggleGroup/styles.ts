import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { styled } from "@stitches/react";

const StyledToggleGroup = styled(ToggleGroup.Root, {
  display: "inline-flex",
  borderRadius: 4,
  marginTop: "1rem",
});

const StyledItem = styled(ToggleGroup.Item, {
  all: "unset",
  backgroundColor: "white",
  padding: ".5rem 1rem",
  display: "flex",
  fontSize: "1rem",
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  marginRight: ".5rem",
  borderRadius: "5rem",
  "&:hover": { backgroundColor: "#068749", color: "white", cursor: "pointer" },
  "&[data-state=on]": { backgroundColor: "#1e3932", color: "white" },
  "&:focus": { position: "relative", boxShadow: `0 0 0 1px #068749` },
});

export const ToggleContainer = StyledToggleGroup;
export const ToggleItem = StyledItem;
