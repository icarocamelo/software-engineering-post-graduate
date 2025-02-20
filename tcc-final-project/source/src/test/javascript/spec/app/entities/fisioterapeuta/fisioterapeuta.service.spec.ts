import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FisioterapeutaService } from 'app/entities/fisioterapeuta/fisioterapeuta.service';
import { IFisioterapeuta, Fisioterapeuta } from 'app/shared/model/fisioterapeuta.model';

describe('Service Tests', () => {
  describe('Fisioterapeuta Service', () => {
    let injector: TestBed;
    let service: FisioterapeutaService;
    let httpMock: HttpTestingController;
    let elemDefault: IFisioterapeuta;
    let expectedResult: IFisioterapeuta | IFisioterapeuta[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(FisioterapeutaService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Fisioterapeuta(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Fisioterapeuta', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new Fisioterapeuta()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Fisioterapeuta', () => {
        const returnedFromService = Object.assign(
          {
            nome: 'BBBBBB',
            rG: 'BBBBBB',
            cPF: 'BBBBBB',
            numeroRegistro: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Fisioterapeuta', () => {
        const returnedFromService = Object.assign(
          {
            nome: 'BBBBBB',
            rG: 'BBBBBB',
            cPF: 'BBBBBB',
            numeroRegistro: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Fisioterapeuta', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
