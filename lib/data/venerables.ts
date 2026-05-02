/**
 * Venerables Data
 * CMS-ready structure for teachers and venerables
 */

import { Venerable } from "@/lib/types/content";

export const venerables: Venerable[] = [
  {
    id: "venerable-mudita-ratna-bhikkhu",
    slug: "venerable-mudita-ratna-bhikkhu",
    name: "Venerable Mudita Ratna Bhikkhu",
    title: "Abbot",
    lineage: "Chan (Zen) Buddhism, Linji School",
    teachingFocus: "Meditation practice, mindfulness in daily life, and the integration of wisdom and compassion",
    bio: "Venerable Mudita Ratna Bhikkhu has been practicing Chan Buddhism for over 20 years. He received transmission in the Linji lineage and has been teaching meditation and Buddhist philosophy at Queens Buddhist Temple for the past 25 years. His teachings emphasize the integration of practice and daily life, helping students find wisdom and compassion in every moment.",
    imageUrl: "/images/venerables/mudita-ratna-bhikkhu.jpg",
    order: 1,
    specialties: ["Meditation", "Chan Buddhism", "Mindfulness"],
  },
  {
    id: "venerable-monindra-bangsha-bhikkhu",
    slug: "venerable-monindra-bangsha-bhikkhu",
    name: "Ven. Monindra Bangsha Bhikkhu",
    title: "Senior Teacher",
    lineage: "Theravada Buddhism",
    teachingFocus: "Buddhist teachings, meditation, and spiritual guidance",
    bio: "Ven. Monindra Bangsha Bhikkhu is a senior teacher dedicated to sharing the teachings of the Buddha with the community. His guidance helps students develop wisdom, mindfulness, and compassion in their daily lives.",
    imageUrl: "/images/venerables/PHOTO-2026-04-25-15-18-06.jpg",
    order: 2,
    specialties: ["Buddhist Teachings", "Meditation", "Spiritual Guidance"],
  },
  {
    id: "venerable-vishuddhi-bangsha-bhikkhu",
    slug: "venerable-vishuddhi-bangsha-bhikkhu",
    name: "Ven. Vishuddhi Bangsha Bhikkhu",
    title: "Resident Monk",
    lineage: "Theravada Buddhism",
    teachingFocus: "Buddhist teachings, meditation, and monastic practice",
    bio: "Ven. Vishuddhi Bangsha Bhikkhu serves as Resident Monk at Queens Buddhist Temple, offering guidance in Buddhist teachings and meditation practice. His presence and dedication support the spiritual life of the community.",
    imageUrl: "/images/venerables/vishuddhi-bangsha-bhikkhu.jpg",
    order: 3,
    specialties: ["Buddhist Teachings", "Meditation", "Monastic Practice"],
  },
  {
    id: "venerable-ajahn-somchai",
    slug: "venerable-ajahn-somchai",
    name: "Venerable Ajahn Somchai",
    title: "Meditation Master",
    lineage: "Theravada Buddhism, Thai Forest Tradition",
    teachingFocus: "Jhana meditation, walking meditation, and monastic discipline",
    bio: "Venerable Ajahn Somchai is a meditation master in the Thai Forest Tradition. He has spent many years in forest monasteries and specializes in teaching jhana meditation and walking meditation. His teachings emphasize the importance of discipline and dedicated practice.",
    order: 4,
    specialties: ["Jhana Meditation", "Walking Meditation", "Monastic Discipline"],
  },
  {
    id: "venerable-bhikkhuni-pema",
    slug: "venerable-bhikkhuni-pema",
    name: "Venerable Bhikkhuni Pema",
    title: "Dharma Teacher",
    lineage: "Tibetan Buddhism, Kagyu School",
    teachingFocus: "Mahamudra meditation, compassion practices, and Tibetan Buddhist philosophy",
    bio: "Venerable Bhikkhuni Pema is a teacher in the Tibetan Kagyu tradition, specializing in Mahamudra meditation and compassion practices. She has studied with many great masters and brings the profound teachings of Tibetan Buddhism to Western students in an accessible way.",
    order: 5,
    specialties: ["Mahamudra", "Compassion Practices", "Tibetan Buddhism"],
  },
  {
    id: "venerable-master-wang",
    slug: "venerable-master-wang",
    name: "Venerable Master Wang",
    title: "Senior Teacher",
    lineage: "Chan Buddhism, Caodong School",
    teachingFocus: "Silent illumination meditation, koan study, and the integration of practice and daily life",
    bio: "Venerable Master Wang is a senior teacher in the Caodong (Soto Zen) tradition, specializing in silent illumination meditation. He has been teaching for 30 years and emphasizes the integration of meditation practice with all aspects of daily life.",
    order: 6,
    specialties: ["Silent Illumination", "Koan Study", "Zen Practice"],
  },
];

/**
 * Get all venerables
 */
export function getAllVenerables(): Venerable[] {
  return venerables.sort((a, b) => a.order - b.order);
}

/**
 * Get venerable by slug
 */
export function getVenerableBySlug(slug: string): Venerable | undefined {
  return venerables.find(venerable => venerable.slug === slug);
}

/**
 * Get venerable by ID
 */
export function getVenerableById(id: string): Venerable | undefined {
  return venerables.find(venerable => venerable.id === id);
}

