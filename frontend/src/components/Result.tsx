import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import {whoisRecord} from "../types/types";

interface Props {
  result: whoisRecord | undefined;
  error?: any;
}

const Result: React.FunctionComponent<Props> = ({ result, error }) => {
  const getYears = (days: number | undefined) => days ? (days/365).toFixed(2) : 'not given';

  return (
    <Card>
      <CardContent style={styles.cardContent}>
        {error ?
          <p style={styles.infoText}>{error.ErrorMessage.msg}</p>
          :
          <>
            <p style={styles.infoText}>Domain name: {result?.WhoisRecord?.domainName ?? 'unknown'}</p>
            <p style={styles.infoText}>Registrar name: {result?.WhoisRecord?.registrarName ?? 'unknown'}</p>
            <p style={styles.infoText}>Contact email: {result?.WhoisRecord?.contactEmail ?? 'unknown'}</p>
            <p style={styles.infoText}>Estimated domain age in years: {getYears(result?.WhoisRecord?.estimatedDomainAge)}</p>
            <p style={styles.infoText}>Description: {result?.WhoisRecord?.registryData?.header ?? 'unknown'}</p>
          </>
        }
      </CardContent>
    </Card>
  )
}

export default Result;

const styles = {
  cardContent: {
    padding: 20,
    width: '75vw',
    maxWidth: 800,
    margin: 'auto'
  },
  infoText: {
    margin: '10px',
  }
}