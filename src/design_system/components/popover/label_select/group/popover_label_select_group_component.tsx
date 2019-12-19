import { css } from "emotion";
import * as React from "react";
import { borderRadiuses } from "../../../../constants/border_radiuses";
import { SelectionStrategy } from "../../../../constants/selection_strategy";
import { whitespaces } from "../../../../constants/whitespaces";
import { ScrollInfo, useScrollInfo } from "../../../../hooks/use_scroll_info";
import { PopoverLabelSelectElementComponent } from "../element/popover_label_select_element_component";
import { popoverLabelSelectGroupStyle } from "./popover_label_select_group.style";

export interface PopoverLabelSelectGroupProps {
    elements: LabelSelectElementInfo[];
    onSelectionChanged: (selectedIds: string[]) => void;
    initialSelectionIds: string[];
    selectionStrategy: SelectionStrategy;
}

export interface LabelSelectElementInfo {
    label: string;
    id: string;
}

export const PopoverLabelSelectGroupComponent: React.FC<PopoverLabelSelectGroupProps> = props => {
    const { elements, onSelectionChanged, initialSelectionIds, selectionStrategy } = props;
    const [selection, setSelection] = React.useState(initialSelectionIds);

    const wrapperRef = React.useRef(undefined as HTMLDivElement);
    const scrollInfo = useScrollInfo(wrapperRef);

    return (
        <div
            className={`${popoverLabelSelectGroupStyle} ${generateScrollShadow(scrollInfo)}`}
            ref={wrapperRef}
        >
            {elements.map(element => (
                <PopoverLabelSelectElementComponent
                    key={element.id}
                    selected={initialSelectionIds.includes(element.id)}
                    onSelect={(id, selected) => {
                        if (selectionStrategy === SelectionStrategy.CHECKBOX) {
                            const selectionCopy = [...selection];
                            if (!selected) {
                                selectionCopy.push(element.id);
                            } else {
                                selectionCopy.splice(
                                    selectionCopy.findIndex(s => s === element.id),
                                    1
                                );
                            }
                            setSelection(selectionCopy);
                            onSelectionChanged(selectionCopy);
                        }
                    }}
                    label={element.label}
                    id={element.id}
                />
            ))}
        </div>
    );
};

function generateScrollShadow(scrollInfo: ScrollInfo): string {
    if (scrollInfo) {
        const { scrollPercentage, canScroll } = scrollInfo;
        const topAmount = scrollPercentage / 100;
        const bottomAmount = 1 - scrollPercentage / 100;

        const topShadowColor = `rgba(0,0,0,${0.22 * topAmount})`;
        const topBackground = `linear-gradient(${topShadowColor}, transparent)`;

        const bottomShadowColor = `rgba(0,0,0,${0.22 * bottomAmount})`;
        const bottomBackground = `linear-gradient(transparent,${bottomShadowColor})`;

        if (canScroll) {
            return css`
                padding: 0;
                position: relative;

                &:before,
                &:after {
                    position: sticky;
                    left: 0;
                    right: 0;
                    display: block;
                    border-radius: ${borderRadiuses[4]};
                    height: ${whitespaces[6]};
                    content: " ";
                    transition: background 0.1s ease;
                }

                &:before {
                    top: 0;
                    background: ${topBackground};
                }

                &:after {
                    bottom: 0;
                    background: ${bottomBackground};
                }
            `;
        }
    }
    return css`
        padding: ${whitespaces[6]} ${whitespaces[0]};
    `;
}
