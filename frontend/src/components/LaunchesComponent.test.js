import LaunchesComponent from './LaunchesComponent';
import {fireEvent, render} from '@testing-library/react';

describe(LaunchesComponent, function () {
    let launches;
    let removeLaunch;

    function createUi() {
        return render(<LaunchesComponent launches={launches} removeLaunch={removeLaunch}/>);

    }

    beforeEach(function () {
        removeLaunch = jest.fn();
    });

    it('should remove launch on X button', function () {
        launches = [
            {
                name: 'Test::name:',
                mass: {
                    kg: 'Test::kg:'
                },
                id: 'Test::id:'
            }
        ];
        const result = createUi();
        fireEvent.click(
            result.container.getElementsByTagName('button').item(0)
        );
        expect(removeLaunch).toBeCalled();
    });
    
    it('should show launch', function () {
        launches = [
            {
                name: 'Test::name:',
                mass: {
                    kg: 'Test::kg:'
                },
                id: 'Test::id:'
            }
        ];
        const result = createUi();
        expect(result.container).toContainHTML('Test::name: | Weight: Test::kg: kg');
    });
});