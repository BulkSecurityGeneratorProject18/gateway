/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { GatewayTestModule } from '../../../test.module';
import { RegionMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/region-my-suffix/region-my-suffix-detail.component';
import { RegionMySuffixService } from '../../../../../../main/webapp/app/entities/region-my-suffix/region-my-suffix.service';
import { RegionMySuffix } from '../../../../../../main/webapp/app/entities/region-my-suffix/region-my-suffix.model';

describe('Component Tests', () => {

    describe('RegionMySuffix Management Detail Component', () => {
        let comp: RegionMySuffixDetailComponent;
        let fixture: ComponentFixture<RegionMySuffixDetailComponent>;
        let service: RegionMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GatewayTestModule],
                declarations: [RegionMySuffixDetailComponent],
                providers: [
                    RegionMySuffixService
                ]
            })
            .overrideTemplate(RegionMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RegionMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RegionMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new RegionMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.region).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
