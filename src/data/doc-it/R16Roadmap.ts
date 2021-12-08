export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2020;
const CURRENT_QUARTER: Quarter = 'Q2';

export type RoadmapItem = {
    name: string;
    description: string;
    year: string | number;
    quarter: Quarter;
    status: Status;
    author?: string;
    type?: ItemTypeFilter;
    framework?: FrameworkFilter[];
};
type RoadmapBucket = {
    name: string;
    description: string;
    type: ItemTypeFilter;
    framework?: FrameworkFilter[];
    items: RoadmapItem[];
};

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/angular-components',
        type: 'development',
        framework: ['angular', 'ionic'],
        items: [
            {
                name: 'Drawer',
                description: 'Add drawer components for navigation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Info List Item',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'List Item Tag',
                description: 'Add support for tags (within list items)',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Score Card',
                description: 'Add a component for stylized cards',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'React Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/react-components',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'Info List Item',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'User Menu',
                description: 'Add support for non-clickable menu items',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Selection Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'React Native Component Library',
        description: 'Reusable UI elements from @brightlayer-ui/react-native-components',
        type: 'development',
        framework: ['react-native'],
        items: [
            {
                name: 'Drawer',
                description: 'Add a drawer component for navigation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Layout Components',
                description: 'Add components for basic screen layouts',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
            {
                name: 'Selection Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'brightlayer-ui.github.io',
        description: 'The Brightlayer UI documentation site',
        type: 'all',
        items: [
            {
                name: 'Designer Documentation',
                description: 'Expanded documentation for using Brightlayer UI as a designer',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Design Patterns',
                description: 'New format and content for design patterns',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'Brightlayer UI',
            },
            {
                name: 'Downloadable Assets',
                description: 'Add the ability to download designer assets through Figma',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
    {
        name: 'Code Examples',
        description: 'Basic code snippets showing how to implement various design patterns',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Simplification and Consolidation',
                description: 'Consolidating code examples into a single repository',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
            {
                name: 'Enhanced Internationalization Support',
                description: 'Updating our Internationalization examples to support additional languages and use recommended tools',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            }
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'React Native Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Innersource',
                framework: ['react-native'],
            },
        ],
    },
    {
        name: 'Utilities',
        description: 'Assorted tools for helping you work faster',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Brightlayer UI CLI',
                description: 'A command-line interface for starting new projects with automatic Brightlayer UI integration',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'Brightlayer UI',
            },
        ],
    },
];
