import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'B.Tech CSE (Data Science)',
    subtitle: '',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'Hackathons',
    subtitle: 'Minithon, Techthon, Trae AI',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'AI/ML Apps',
    subtitle: 'LifeTrack & EcoGuard',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Building',
    subtitle: 'Data-driven Solutions',
    position: 'right',
  }
]