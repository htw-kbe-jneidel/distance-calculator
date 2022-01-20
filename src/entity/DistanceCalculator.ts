import axios from "axios";

export class DistanceCalculator {
  async calc( coordinates: string[] ): Promise<any> {
    const requestUrl = this.buildRequestUrl( coordinates );

    const results: any = await this.fetch( requestUrl )
      .then( data => this.formatData( data ) );

    results.osmLink = this.createOsmLink( coordinates );

    return results;
  }

  private calculateDistanceInKm( distance: number ) {
    return parseFloat( ( distance / 1000 ).toFixed( 2 ) );
  }
  private calculateDurationInMin( duration: number ) {
    return parseFloat( ( duration / 10 ).toFixed( 2 ) );
  }

  private buildRequestUrl( coordinates: string[] ) {
    const baseUrl = "http://router.project-osrm.org/route/v1/walking/";
    return `${baseUrl + coordinates[0]  };${  coordinates[1]  }?overview=false`;
  }
  private async fetch( url: string ) {
    return axios.get( url ).then( res => res.data );
  }
  private formatData( data: any ) {
    const route = data.routes[0];
    return {
      walkingDistanceInKilometers: this.calculateDistanceInKm( route.distance ),
      walkingDistanceInMinutes   : this.calculateDurationInMin( route.duration ),
    };
  }

  private createOsmLink( coordinates: string[] ): string {
    const baseUrl = "https://www.openstreetmap.org/directions?engine=graphhopper_foot&route=";

    // link has lat/lon in reverse order
    const start = coordinates[0].split( "," );
    const end = coordinates[1].split( "," );

    return `${baseUrl}${start[1]}%2C${start[0]}%3B${end[1]}%2C${end[0]}`;
  }
}
