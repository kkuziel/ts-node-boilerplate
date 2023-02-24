beforeEach(() => {
    configMock();
});

afterEach(() => {
    configRestore();
});

function configMock() {
    process.env.PORT = '1234';
}

function configRestore() {
    delete process.env.PORT;
}
