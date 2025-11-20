import path from 'path';

const __dirname = import.meta.dirname;

export default {
    verbose: true,
    projects: [
        {
            runner: 'jest-runner-eslint',
            displayName: 'lint',
            testMatch: ['<rootDir>/**/*.js'],
            testPathIgnorePatterns: ['/node_modules/', '/dist/', '/local/']
        },
        {
            displayName: 'test',
            testEnvironment: 'jsdom',
            snapshotSerializers: [
                'enzyme-to-json/serializer',
                'jest-aphrodite-react'
            ],
            setupFiles: [path.join(__dirname, 'jest.setup.js')]
        }
    ]
};
