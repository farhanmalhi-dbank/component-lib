import * as LoggerLevel from 'loglevel';
import { logger } from './logger';

describe('Logger', () => {
  it('should call the logger methods successfully', async () => {
    const message = 'This is message';
    jest.spyOn(LoggerLevel, 'setDefaultLevel').mockImplementationOnce(jest.fn);
    const mockLogFn = jest.spyOn(LoggerLevel, 'log').mockImplementationOnce(jest.fn);
    const mockWarnFn = jest.spyOn(LoggerLevel, 'warn').mockImplementationOnce(jest.fn);
    const mockErrorFn = jest.spyOn(LoggerLevel, 'error').mockImplementationOnce(jest.fn);
    await logger.log(message);
    expect(logger.log).toBeDefined();
    expect(mockLogFn).toHaveBeenCalledWith(message);

    await logger.warn(message);
    expect(logger.warn).toBeDefined();
    expect(mockWarnFn).toHaveBeenCalledWith(message);
    await logger.error(message);
    expect(logger.error).toBeDefined();
    expect(mockErrorFn).toHaveBeenCalledWith(message);
  });
});
