<script lang="ts">
 import { type WidgetLayout } from "$lib/stores/layoutStates";
 import { Block } from "@gradio/atoms";
 import { Checkbox } from "@gradio/form";
 import { get, type Writable, writable } from "svelte/store";
 import { isDisabled } from "./utils"
 import { vibrateIfPossible } from "$lib/utils";
 import type { SelectData } from "@gradio/utils";
 import type { ComfyCheckboxNode } from "$lib/nodes/widgets";

 export let widget: WidgetLayout | null = null;
 export let isMobile: boolean = false;
 let node: ComfyCheckboxNode | null = null;
 let nodeValue: Writable<boolean> | null = null;
 let attrsChanged: Writable<number> | null = null;

 $: widget && setNodeValue(widget);

 function setNodeValue(widget: WidgetLayout) {
     if (widget) {
         node = widget.node as ComfyCheckboxNode
         nodeValue = node.value;
         attrsChanged = widget.attrsChanged;
     }
 };

 function onSelect(e: CustomEvent<SelectData>) {
     $nodeValue = e.detail.selected
     vibrateIfPossible(20)
 }
</script>

<div class="wrapper gradio-checkbox">
    <div class="inner">
        {#key $attrsChanged}
            {#if node !== null}
                <Block>
                    <Checkbox
                        disabled={isDisabled(widget)}
                        label={widget.attrs.title}
                        value={$nodeValue}
                        on:select={onSelect}
                    />
                </Block>
            {/if}
        {/key}
    </div>
</div>

<style lang="scss">
 .wrapper {
     display: flex;
     flex-direction: row;
     align-items: flex-end;
     height: 100%;

     > .inner {
         padding: 2px;
         width: 100%;
         height: 100%;
         display: flex;
         flex-direction: row;

         :global(> .block > label) {
             height: 100%;
         }
     }
 }
</style>
