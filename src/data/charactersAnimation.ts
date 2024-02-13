import { ICharacterAnimation } from '../interface/ICharacterAnimation';
import {
  aokijiAttackMelee,
  aokijiAttackRanged,
  aokijiAttackRangedObject,
  aokijiIdle,
  aokijiRun,
  pirateIdle,
} from './assetKeys';

export const characterAokiji: ICharacterAnimation = {
  scaleX: 2,
  idle: {
    key: aokijiIdle,
    frames: [
      { key: aokijiIdle, frame: 'aokiji_0-0.png' },
      { key: aokijiIdle, frame: 'aokiji_0-1.png' },
      { key: aokijiIdle, frame: 'aokiji_0-2.png' },
    ],
    frameRate: 7,
    frameRateStart: 7,
    repeat: -1,
    yoyo: true,
  },
  run: {
    key: aokijiRun,
    frames: [
      { key: aokijiRun, frame: '1.png' },
      { key: aokijiRun, frame: '2.png' },
      { key: aokijiRun, frame: '3.png' },
      { key: aokijiRun, frame: '4.png' },
      { key: aokijiRun, frame: '5.png' },
      { key: aokijiRun, frame: '6.png' },
      { key: aokijiRun, frame: '7.png' },
      { key: aokijiRun, frame: '8.png' },
    ],
    frameRate: 10,
    frameRateStart: 10,
    repeat: -1,
  },
  attackMelee: {
    key: aokijiAttackMelee,
    frames: [
      { key: aokijiAttackMelee, frame: '1.png' },
      { key: aokijiAttackMelee, frame: '2.png' },
      { key: aokijiAttackMelee, frame: '3.png' },
      { key: aokijiAttackMelee, frame: '4.png' },
      { key: aokijiAttackMelee, frame: '5.png' },
      { key: aokijiAttackMelee, frame: '6.png' },
      { key: aokijiAttackMelee, frame: '7.png' },
      { key: aokijiAttackMelee, frame: '8.png' },
      { key: aokijiAttackMelee, frame: '9.png' },
      { key: aokijiAttackMelee, frame: '10.png' },
    ],
    frameRate: 10,
    frameRateStart: 10,
  },
  attackRanged: {
    isInitObject: true,
    key: aokijiAttackRanged,
    frames: [
      { key: aokijiAttackRanged, frame: '1.png' },
      { key: aokijiAttackRanged, frame: '2.png' },
      { key: aokijiAttackRanged, frame: '3.png' },
      { key: aokijiAttackRanged, frame: '4.png' },
      { key: aokijiAttackRanged, frame: '5.png' },
      { key: aokijiAttackRanged, frame: '6.png' },
      { key: aokijiAttackRanged, frame: '7.png' },
    ],
    frameRate: 7,
    frameRateStart: 7,
  },
  attackRangedObject: {
    positionY: -60,
    key: aokijiAttackRangedObject,
    frames: [
      { key: aokijiAttackRangedObject, frame: 'aokiji_4000-0.png' },
      { key: aokijiAttackRangedObject, frame: 'aokiji_4000-1.png' },
      { key: aokijiAttackRangedObject, frame: 'aokiji_4000-2.png' },
      { key: aokijiAttackRangedObject, frame: 'aokiji_4000-3.png' },
      { key: aokijiAttackRangedObject, frame: 'aokiji_4000-4.png' },
      { key: aokijiAttackRangedObject, frame: 'aokiji_4000-5.png' },
      { key: aokijiAttackRangedObject, frame: 'aokiji_4000-6.png' },
    ],
    frameRate: 7,
    frameRateStart: 7,
  },
};

export const characterPirate: ICharacterAnimation = {
  scaleX: 2,
  idle: {
    key: pirateIdle,
    frames: [
      { key: pirateIdle, frame: '1.png' },
      { key: pirateIdle, frame: '2.png' },
      { key: pirateIdle, frame: '3.png' },
    ],
    frameRate: 7,
    frameRateStart: 7,
    repeat: -1,
    yoyo: true,
  },
};
