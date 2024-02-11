import * as Phaser from 'phaser';

export class Damage {
  constructor(scene: Phaser.Scene, sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody) {
    this.scene = scene;
    this.sprite = sprite;
  }

  private scene: Phaser.Scene;
  private sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private damageText: Phaser.GameObjects.Text;

  public createDamageText(isFlip = false): void {
    const centerX =
      this.sprite.x + (isFlip ? this.sprite.displayWidth / 2 : -this.sprite.displayWidth / 2);
    const centerY = this.sprite.y - this.sprite.displayHeight / 1.2;
    this.damageText = this.scene.add.text(centerX, centerY, '-100', {
      fontFamily: 'AngryBirds',
      fontSize: 30,
      color: '#000000',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      stroke: '#ffffff',
      strokeThickness: 2,
    });
    this.damageText.setOrigin(0.5);
    this.damageText.setDepth(3);
    this.hide();
  }

  public show(): void {
    this.damageText.setVisible(true);
  }

  public hide(): void {
    this.damageText.setVisible(false);
  }

  public changeTextAndAnimate(newText: string, speed: number): void {
    this.show();
    this.damageText.setText(newText);
    this.scene.tweens.add({
      targets: this.damageText,
      y: this.damageText.y - 30,
      alpha: 0,
      duration: 1000 / speed,
      ease: Phaser.Math.Easing.Linear,
      onComplete: () => {
        this.damageText.y += 30;
        this.damageText.setAlpha(1);
        this.hide();
      },
    });
  }
}
