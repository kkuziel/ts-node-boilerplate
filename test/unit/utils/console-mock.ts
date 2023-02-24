class ConsoleMock implements Console {

    assert = jest.fn();

    clear = jest.fn();

    count = jest.fn();

    countReset = jest.fn();

    debug = jest.fn();

    dir = jest.fn();

    dirxml = jest.fn();

    error = jest.fn();

    group = jest.fn();

    groupCollapsed = jest.fn();

    groupEnd = jest.fn();

    info = jest.fn();

    log = jest.fn();

    table = jest.fn();

    time = jest.fn();

    timeEnd = jest.fn();

    timeLog = jest.fn();

    timeStamp = jest.fn();

    trace = jest.fn();

    warn = jest.fn();

    profile = jest.fn();

    profileEnd = jest.fn();

    Console: any;
}

export default ConsoleMock;
