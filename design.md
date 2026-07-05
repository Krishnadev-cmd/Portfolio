# Design.md

## My Skills Section Redesign

### Objective

Redesign the **My Skills** section so that it initially displays **only a FIFA-style player card** using the image that has already been provided in the project. **Do not create a new FIFA card design or add any additional UI elements.** Use the existing image asset as the FIFA card.

---

## Initial State

* Display only the FIFA card image.
* Use the existing image path already provided in the project.
* Position the card in the center of the My Skills section.
* Hide the existing Skills section completely.
* Add only a subtle hover effect (slight scale increase and pointer cursor).

---

## Interaction

When the user clicks the FIFA card:

1. The card should perform a smooth 3D rotation.
2. While rotating, it should smoothly move from the center to the **top-right corner** of the My Skills section.
3. During this movement, the card should **gradually shrink (minimize)** so that it occupies only a small portion of the top-right corner.
4. After the animation completes:

   * Keep the minimized FIFA card pinned in the top-right.
   * Reveal the existing Skills section exactly as it currently exists.
   * Do not redesign or modify the existing Skills layout in any way.

---

## Animation Requirements

The animation should feel premium, smooth, and natural.

### FIFA Card Animation

* Smooth 3D rotation (Y-axis preferred, with optional slight X-axis tilt).
* Smooth translation from the center to the top-right.
* Simultaneous scaling down while moving.
* The card should end at approximately **35–45%** of its original size.
* Use GPU-accelerated transforms only (`translate`, `rotate`, `scale`).
* Use an `ease-in-out` or spring animation with gentle damping.
* Total duration: **700–1000ms**.

---

## Skills Reveal

Once the card has reached its final minimized position:

* Fade in the existing Skills section.
* Optionally combine the fade with a subtle upward slide (10–20px).
* Duration: **300–500ms**.
* The reveal should only begin after the card animation has fully completed.

---

## Final Layout

After the transition:

* The FIFA card remains minimized in the **top-right corner**.
* The existing Skills section is displayed exactly as before.
* No changes should be made to the Skills UI other than revealing it.
* The minimized FIFA card should remain visible as a decorative/profile element.

---

## Constraints

* Use the existing FIFA card image from the provided path.
* Do not create a new FIFA card.
* Do not redesign the Skills section.
* Do not add any extra buttons, badges, labels, overlays, or backgrounds.
* The only new functionality should be:

  * Initial FIFA card view.
  * Click interaction.
  * Smooth rotate + move + minimize animation.
  * Reveal of the original Skills section.

---

## Technical Expectations

* Keep the implementation component-based.
* Maintain smooth 60 FPS animations.
* Animate only `transform` and `opacity` for maximum performance.
* Prevent layout shifts during the transition.
* Ensure the interaction works smoothly on both desktop and mobile devices.

---

## Expected User Flow

1. User scrolls to **My Skills**.
2. A single FIFA card is displayed in the center.
3. User clicks the card.
4. The card smoothly rotates, moves to the top-right, and gradually minimizes.
5. After the animation completes, the original Skills section fades into view.
6. The minimized FIFA card remains in the top-right while the Skills section stays fully visible.
